// Social Investment Simulator - Core Logic & Visualizations

// Global chart instances
let decayChart = null;
let recyclingChart = null;
let waterfallChart = null;

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
  setupUI();
  runSimulation();
});

// Baseline pair: 80% write-offs at 5% sourcing cost.
// Each 10 percentage-point drop in default multiplies friction by 1.3 (30% more spend).
const BASE_DEFAULT_RATE = 80;
const BASE_FRICTION_COST = 5;
const FRICTION_LIFT_PER_10PP = 1.3;
const FRICTION_MIN = 0;
const FRICTION_MAX = 40;

let syncingLinkedSliders = false;
let activePreset = null;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function frictionFromDefault(defaultRate) {
  const ratio = Math.pow(FRICTION_LIFT_PER_10PP, (BASE_DEFAULT_RATE - defaultRate) / 10);
  return clamp(Math.round(BASE_FRICTION_COST * ratio * 10) / 10, FRICTION_MIN, FRICTION_MAX);
}

function defaultFromFriction(frictionCost) {
  if (frictionCost <= 0) return 100;
  const defaultRate = BASE_DEFAULT_RATE - 10 * Math.log(frictionCost / BASE_FRICTION_COST) / Math.log(FRICTION_LIFT_PER_10PP);
  return clamp(Math.round(defaultRate / 5) * 5, 0, 100);
}

const PRESET_COPY = {
  pure_grant: {
    name: 'Pure Grant Spend',
    body: 'The control case: none of the pool is invested. The whole pot is given away as grants each year until it runs out. Use this as the spend-down runway you are comparing everything else against. Sourcing cost and write-offs do not bite here because nothing is being originated as social investment.'
  },
  larger_si: {
    name: 'Larger Social Investment',
    body: 'A bigger slice of the pool (60%) is placed into businesses, with a slightly lower annual grant so the grant book lasts. Write-offs are a notch better than the high-loss book, so sourcing spend steps up with that improvement. This is the “more capital at work in enterprises” scenario.'
  },
  high_loss: {
    name: 'High Loss Recycling',
    body: 'A typical first social-investment book: 30% of the pool is invested, 80% of deals are written off, and winners still return 2.5x. Cheap origination (5% friction) matches that high loss rate. Recycling still happens — just from a thin surviving slice of the portfolio.'
  },
  evergreen: {
    name: 'Evergreen Pool',
    body: 'An evergreen pool is capital that is meant to keep turning over rather than being spent once. Repayments (here, revenue share in years 2–5) go back into the same pot so grants and investments can continue. That only holds if write-offs are kept in check — so this preset buys a 30% default rate with much heavier sourcing and due-diligence spend, a moderate 40% SI allocation, and a 12-year watch window.'
  }
};

function setPresetExplainer(preset, customized) {
  const nameEl = document.getElementById('preset-explainer-name');
  const bodyEl = document.getElementById('preset-explainer-body');
  const copy = PRESET_COPY[preset];

  if (!nameEl || !bodyEl) return;

  if (!copy) {
    nameEl.innerText = 'Custom mix';
    bodyEl.innerText = 'Sliders have been moved off the presets. Lower default / write-off rates automatically raise sourcing & deal friction: about 30% more origination spend for each 10 percentage-point improvement in defaults.';
    return;
  }

  nameEl.innerText = customized ? `${copy.name} (adjusted)` : copy.name;
  bodyEl.innerText = customized
    ? `${copy.body} You have moved sliders away from this preset’s starting points.`
    : copy.body;
}

function highlightPreset(preset) {
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('preset-active', btn.dataset.preset === preset);
  });
}

// Load quick scenario presets
function loadScenario(preset) {
  const presets = {
    pure_grant: {
      'initial-capital': 1000000,
      'time-horizon': 10,
      'annual-grant': 100000,
      'si-allocation': 0,
      'strategy-type': 'debt_loans',
      'default-rate': 80,
      'winner-moic': 2.5,
      'friction-cost': frictionFromDefault(80),
      'impact-factor': 1.5
    },
    larger_si: {
      'initial-capital': 1000000,
      'time-horizon': 10,
      'annual-grant': 80000,
      'si-allocation': 60,
      'strategy-type': 'debt_loans',
      'default-rate': 70,
      'winner-moic': 1.5,
      'friction-cost': frictionFromDefault(70),
      'impact-factor': 1.8
    },
    high_loss: {
      'initial-capital': 1000000,
      'time-horizon': 10,
      'annual-grant': 100000,
      'si-allocation': 30,
      'strategy-type': 'debt_loans',
      'default-rate': 80,
      'winner-moic': 2.5,
      'friction-cost': frictionFromDefault(80),
      'impact-factor': 1.5
    },
    evergreen: {
      'initial-capital': 1000000,
      'time-horizon': 12,
      'annual-grant': 100000,
      'si-allocation': 40,
      'strategy-type': 'revenue_share',
      'default-rate': 30,
      'winner-moic': 2.0,
      'friction-cost': frictionFromDefault(30),
      'impact-factor': 1.5
    }
  };

  const values = presets[preset];
  if (!values) return;

  syncingLinkedSliders = true;
  Object.entries(values).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
  syncingLinkedSliders = false;

  activePreset = preset;
  setPresetExplainer(preset, false);
  highlightPreset(preset);
  updateLabels();
  runSimulation();
}

// Bind UI elements
function setupUI() {
  const inputs = [
    'initial-capital',
    'time-horizon',
    'annual-grant',
    'si-allocation',
    'strategy-type',
    'default-rate',
    'winner-moic',
    'friction-cost',
    'impact-factor'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener('input', () => {
      if (!syncingLinkedSliders) {
        if (id === 'default-rate') {
          syncingLinkedSliders = true;
          const frictionEl = document.getElementById('friction-cost');
          frictionEl.value = frictionFromDefault(parseFloat(el.value));
          syncingLinkedSliders = false;
        } else if (id === 'friction-cost') {
          syncingLinkedSliders = true;
          const defaultEl = document.getElementById('default-rate');
          defaultEl.value = defaultFromFriction(parseFloat(el.value));
          syncingLinkedSliders = false;
        }

        if (activePreset) {
          setPresetExplainer(activePreset, true);
        } else {
          setPresetExplainer(null, true);
        }
        highlightPreset(null);
      }

      updateLabels();
      runSimulation();
    });
  });

  updateLabels();
}

// Update value labels next to sliders
function updateLabels() {
  // Formatters
  const formatCurrency = (val) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val) => {
    const n = parseFloat(val);
    const shown = Number.isInteger(n) ? String(n) : n.toFixed(1);
    return `${shown}%`;
  };
  const formatMOIC = (val) => `${val}x`;
  const formatYears = (val) => `${val} Years`;

  const mappings = [
    { slider: 'initial-capital', label: 'initial-capital-val', fmt: formatCurrency },
    { slider: 'time-horizon', label: 'time-horizon-val', fmt: formatYears },
    { slider: 'annual-grant', label: 'annual-grant-val', fmt: formatCurrency },
    { slider: 'si-allocation', label: 'si-allocation-val', fmt: formatPercent },
    { slider: 'default-rate', label: 'default-rate-val', fmt: formatPercent },
    { slider: 'winner-moic', label: 'winner-moic-val', fmt: formatMOIC },
    { slider: 'friction-cost', label: 'friction-cost-val', fmt: formatPercent },
    { slider: 'impact-factor', label: 'impact-factor-val', fmt: formatMOIC }
  ];

  mappings.forEach(m => {
    const slider = document.getElementById(m.slider);
    const label = document.getElementById(m.label);
    if (slider && label) {
      label.innerText = m.fmt(slider.value);
    }
  });
}

// Main Simulation Runner
function runSimulation() {
  // 1. Get input parameters
  const initialCapital = parseFloat(document.getElementById('initial-capital').value);
  const timeHorizon = parseInt(document.getElementById('time-horizon').value);
  const annualGrant = parseFloat(document.getElementById('annual-grant').value);
  const siAllocationPct = parseFloat(document.getElementById('si-allocation').value) / 100;
  const strategyType = document.getElementById('strategy-type').value;
  const defaultRatePct = parseFloat(document.getElementById('default-rate').value) / 100;
  const winnerMOIC = parseFloat(document.getElementById('winner-moic').value);
  const frictionCostPct = parseFloat(document.getElementById('friction-cost').value) / 100;
  const impactFactor = parseFloat(document.getElementById('impact-factor').value);

  // 2. Perform Calculations
  const { trackA, trackB, trackC, siDetails } = runSimulationEngine(
    initialCapital,
    timeHorizon,
    annualGrant,
    siAllocationPct,
    strategyType,
    defaultRatePct,
    winnerMOIC,
    frictionCostPct,
    impactFactor
  );

  // 3. Update KPI Cards
  updateKPICards(trackA, trackB, trackC, siDetails, initialCapital, timeHorizon);

  // 4. Update Charts
  renderDecayChart(trackA, trackB, trackC, timeHorizon);
  renderRecyclingChart(trackB, timeHorizon);
  renderWaterfallChart(siDetails);
}

// Math Engine
function runSimulationEngine(C0, H, G, A, strategy, D, M, F, I) {
  // Initialize Track A (Control: 100% Grant Pool)
  const trackA = [];
  let balanceA = C0;
  trackA.push({
    year: 0,
    balance: balanceA,
    grantSpent: 0,
    cumGrants: 0,
    socialValue: 0
  });

  for (let k = 1; k <= H; k++) {
    const grantSpent = Math.min(balanceA, G);
    balanceA -= grantSpent;
    const cumGrants = trackA[k - 1].cumGrants + grantSpent;
    trackA.push({
      year: k,
      balance: balanceA,
      grantSpent: grantSpent,
      cumGrants: cumGrants,
      socialValue: cumGrants * 1.0 // Grants SROI is 1.0x
    });
  }

  // Initialize Track B (Hybrid: Social Investment + Grants)
  const trackB = [];
  const siAlloc = C0 * A;
  const originalGrantPool = C0 * (1 - A);
  
  // Social investment details
  const siFriction = siAlloc * F;
  const siDeployed = siAlloc * (1 - F);
  const siDefaulted = siDeployed * D;
  const siWinning = siDeployed * (1 - D);
  const siReturns = siWinning * M;

  // Distribute returns by year
  const returnsByYear = new Array(H + 1).fill(0);
  if (A > 0) {
    if (strategy === 'revenue_share') {
      // Returned equally in Years 2 to 5
      for (let k = 2; k <= 5; k++) {
        if (k <= H) returnsByYear[k] = siReturns / 4;
      }
    } else if (strategy === 'debt_loans') {
      // Returned equally in Years 1 to 5
      for (let k = 1; k <= 5; k++) {
        if (k <= H) returnsByYear[k] = siReturns / 5;
      }
    } else if (strategy === 'venture_equity') {
      // Lump sum in Year 7 (if within horizon)
      if (7 <= H) {
        returnsByYear[7] = siReturns;
      }
    }
  }

  // Initial State of Track B
  let oBalance = originalGrantPool;
  let rBalance = 0;
  trackB.push({
    year: 0,
    balance: oBalance + rBalance,
    originalBalance: oBalance,
    recycledBalance: rBalance,
    grantSpent: 0,
    grantSpentFromOriginal: 0,
    grantSpentFromRecycled: 0,
    cumGrants: 0,
    cumGrantsOriginal: 0,
    cumGrantsRecycled: 0,
    returnRecycled: 0,
    socialValue: 0
  });

  for (let k = 1; k <= H; k++) {
    // Add returns for this year
    const ret = returnsByYear[k];
    let tempRecycled = trackB[k - 1].recycledBalance + ret;
    let tempOriginal = trackB[k - 1].originalBalance;
    let tempTotal = tempOriginal + tempRecycled;

    // Grant spent
    const grantSpent = Math.min(tempTotal, G);
    
    // Draw from original first
    const grantSpentFromOriginal = Math.min(tempOriginal, grantSpent);
    const grantSpentFromRecycled = grantSpent - grantSpentFromOriginal;

    oBalance = tempOriginal - grantSpentFromOriginal;
    rBalance = tempRecycled - grantSpentFromRecycled;

    const cumGrantsOriginal = trackB[k - 1].cumGrantsOriginal + grantSpentFromOriginal;
    const cumGrantsRecycled = trackB[k - 1].cumGrantsRecycled + grantSpentFromRecycled;
    const cumGrants = trackB[k - 1].cumGrants + grantSpent;

    // Social value created
    // Grants give 1.0x. Investments give 'I'x of the deployed portion.
    const grantSocialValue = cumGrants * 1.0;
    const investmentSocialValue = (k >= 1 && A > 0) ? (siDeployed * I) : 0;
    const socialValue = grantSocialValue + investmentSocialValue;

    trackB.push({
      year: k,
      balance: oBalance + rBalance,
      originalBalance: oBalance,
      recycledBalance: rBalance,
      grantSpent,
      grantSpentFromOriginal,
      grantSpentFromRecycled,
      cumGrants,
      cumGrantsOriginal,
      cumGrantsRecycled,
      returnRecycled: ret,
      socialValue
    });
  }

  const totalRecycled = returnsByYear.reduce((sum, val) => sum + val, 0);

  // Initialize Track C (Cash Savings: 3% Interest, 100% Grant Pool)
  const trackC = [];
  let balanceC = C0;
  trackC.push({
    year: 0,
    balance: balanceC,
    grantSpent: 0,
    cumGrants: 0,
    socialValue: 0
  });

  for (let k = 1; k <= H; k++) {
    // Interest earned on start-of-year balance
    const interest = balanceC * 0.03;
    const tempBalance = balanceC + interest;
    const grantSpent = Math.min(tempBalance, G);
    balanceC = tempBalance - grantSpent;
    const cumGrants = trackC[k - 1].cumGrants + grantSpent;
    trackC.push({
      year: k,
      balance: balanceC,
      grantSpent: grantSpent,
      cumGrants: cumGrants,
      socialValue: cumGrants * 1.0 // SROI is 1.0x (paid as grants)
    });
  }

  return {
    trackA,
    trackB,
    trackC,
    siDetails: {
      allocated: siAlloc,
      friction: siFriction,
      deployed: siDeployed,
      defaulted: siDefaulted,
      winning: siWinning,
      returns: siReturns,
      totalRecycled: totalRecycled,
      recoveryRate: siAlloc > 0 ? (totalRecycled / siAlloc) : 0,
      realizedMOIC: siAlloc > 0 ? (totalRecycled / siAlloc) : 0
    }
  };
}

// Update DOM Metrics
function updateKPICards(trackA, trackB, trackC, siDetails, initialCapital, H) {
  // Formatters
  const formatCurrency = (val) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val) => `${(val * 100).toFixed(1)}%`;
  const formatMOIC = (val) => `${val.toFixed(2)}x`;

  // Lifespans (number of years with grant spent > 0)
  const lifespanA = trackA.filter(y => y.grantSpent > 0).length;
  const lifespanB = trackB.filter(y => y.grantSpent > 0).length;
  const lifespanC = trackC.filter(y => y.grantSpent > 0).length;
  const extension = lifespanB - lifespanA;

  // Deployment Power Multiplier
  // Track A = total grants / initial capital
  // Track B = (total grants + net SI deployed) / initial capital
  const depA = trackA[H].cumGrants;
  const depB = trackB[H].cumGrants + siDetails.deployed;
  const multiplierB = depB / initialCapital;

  // SROI Multipliers
  const sroiA = trackA[H].socialValue / initialCapital;
  const sroiB = trackB[H].socialValue / initialCapital;
  const sroiC = trackC[H].socialValue / initialCapital;

  // Update elements
  const extensionEl = document.getElementById('kpi-extension');
  extensionEl.innerText = extension >= 0 ? `+${extension} Years` : `${extension} Years`;
  if (extension > 0) {
    extensionEl.className = 'text-xl font-bold text-emerald-600 mt-2';
  } else if (extension < 0) {
    extensionEl.className = 'text-xl font-bold text-red-600 mt-2';
  } else {
    extensionEl.className = 'text-xl font-bold text-slate-900 mt-2';
  }
  document.getElementById('kpi-extension-sub').innerText = `Runway: Hybrid (${lifespanB}y) vs Grant (${lifespanA}y) vs Savings (${lifespanC}y)`;

  document.getElementById('kpi-multiplier').innerText = formatMOIC(multiplierB);
  document.getElementById('kpi-multiplier-sub').innerText = `${formatCurrency(depB)} total capital deployed`;

  document.getElementById('kpi-recycled').innerText = formatCurrency(siDetails.totalRecycled);
  document.getElementById('kpi-recycled-sub').innerText = `From ${formatCurrency(siDetails.allocated)} original allocation`;

  document.getElementById('kpi-moic').innerText = `${siDetails.realizedMOIC.toFixed(2)}x`;
  document.getElementById('kpi-moic-sub').innerText = `${formatPercent(siDetails.recoveryRate)} capital recovery rate`;

  document.getElementById('kpi-sroi').innerText = formatMOIC(sroiB);
  document.getElementById('kpi-sroi-sub').innerText = `SROI: Hybrid (${formatMOIC(sroiB)}) vs Grant (${formatMOIC(sroiA)}) vs Savings (${formatMOIC(sroiC)})`;
}

// Chart 1: Capital Pool Decay Curve
function renderDecayChart(trackA, trackB, trackC, H) {
  const ctx = document.getElementById('decayChart').getContext('2d');
  const labels = Array.from({ length: H + 1 }, (_, i) => `Year ${i}`);

  const dataA = trackA.map(d => d.balance);
  const dataB = trackB.map(d => d.balance);
  const dataC = trackC.map(d => d.balance);

  if (decayChart) {
    decayChart.data.labels = labels;
    decayChart.data.datasets[0].data = dataA;
    decayChart.data.datasets[1].data = dataB;
    decayChart.data.datasets[2].data = dataC;
    decayChart.update();
    return;
  }

  decayChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Track A (Pure Grant Model)',
          data: dataA,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.01)',
          fill: true,
          tension: 0.15,
          borderWidth: 2,
          pointRadius: 2
        },
        {
          label: 'Track B (Hybrid Model)',
          data: dataB,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.04)',
          fill: true,
          tension: 0.15,
          borderWidth: 3,
          pointRadius: 2
        },
        {
          label: 'Track C (3% Cash Savings / No Social Investment)',
          data: dataC,
          borderColor: '#64748b',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          fill: false,
          tension: 0.15,
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: £${context.raw.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '£' + value.toLocaleString('en-GB', { maximumFractionDigits: 0 });
            }
          },
          title: {
            display: true,
            text: 'Remaining Capital Balance'
          }
        }
      }
    }
  });
}

// Chart 2: Annual Cash Recycling & Deployment Breakdown
function renderRecyclingChart(trackB, H) {
  const ctx = document.getElementById('recyclingChart').getContext('2d');
  const labels = Array.from({ length: H }, (_, i) => `Year ${i + 1}`);

  const originalG = trackB.slice(1).map(d => d.grantSpentFromOriginal);
  const recycledG = trackB.slice(1).map(d => d.grantSpentFromRecycled);

  if (recyclingChart) {
    recyclingChart.data.labels = labels;
    recyclingChart.data.datasets[0].data = originalG;
    recyclingChart.data.datasets[1].data = recycledG;
    recyclingChart.update();
    return;
  }

  recyclingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Grants from Original Capital',
          data: originalG,
          backgroundColor: '#94a3b8' // Slate
        },
        {
          label: 'Grants from Recycled Returns',
          data: recycledG,
          backgroundColor: '#10b981' // Emerald green
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: £${context.raw.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;
            }
          }
        }
      },
      scales: {
        x: { stacked: true },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '£' + value.toLocaleString('en-GB', { maximumFractionDigits: 0 });
            }
          },
          title: {
            display: true,
            text: 'Annual Grants Funded'
          }
        }
      }
    }
  });
}

// Chart 3: Portfolio Return Profile (Waterfall Chart)
function renderWaterfallChart(siDetails) {
  const ctx = document.getElementById('waterfallChart').getContext('2d');

  const allocated = siDetails.allocated;
  const friction = siDetails.friction;
  const deployed = siDetails.deployed;
  const defaulted = siDetails.defaulted;
  const winning = siDetails.winning;
  const returns = siDetails.returns;
  const totalRecycled = siDetails.totalRecycled;

  // Waterfall bars representation: [start, end]
  // 1. Allocated Capital: [0, allocated]
  // 2. Sourcing & Deal Costs (friction): [deployed, allocated] -> going down
  // 3. Defaults & Write-offs: [winning, deployed] -> going down
  // 4. Winner Realizations: [winning, totalRecycled] -> going up (could be up or down, based on winner returns vs winning principal)
  // 5. Total Recycled: [0, totalRecycled]
  const barData = [
    [0, allocated],
    [deployed, allocated],
    [winning, deployed],
    [winning, totalRecycled],
    [0, totalRecycled]
  ];

  const barColors = [
    '#3b82f6', // Allocated SI (Blue)
    '#f97316', // Sourcing Cost (Orange)
    '#ef4444', // Defaults (Red)
    '#10b981', // Outperformance (Green)
    '#8b5cf6'  // Net Recycled (Purple)
  ];

  if (waterfallChart) {
    waterfallChart.data.datasets[0].data = barData;
    waterfallChart.data.datasets[0].backgroundColor = barColors;
    waterfallChart.update();
    return;
  }

  waterfallChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Allocated Pool',
        'Sourcing / Friction',
        'Default Write-offs',
        'Outperformance',
        'Recycled Returned'
      ],
      datasets: [{
        label: 'Capital flow',
        data: barData,
        backgroundColor: barColors,
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              const bounds = context.raw;
              const diff = Math.abs(bounds[1] - bounds[0]);
              const sign = bounds[1] > bounds[0] ? '+' : '-';
              if (context.dataIndex === 0 || context.dataIndex === 4) {
                return `${context.label}: £${bounds[1].toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;
              }
              const direction = (context.dataIndex === 1 || context.dataIndex === 2) ? '-' : '+';
              return `${context.label}: ${direction}£${diff.toLocaleString('en-GB', { maximumFractionDigits: 0 })} (Span: £${bounds[0].toLocaleString('en-GB')} to £${bounds[1].toLocaleString('en-GB')})`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '£' + value.toLocaleString('en-GB', { maximumFractionDigits: 0 });
            }
          },
          title: {
            display: true,
            text: 'Capital Value'
          }
        }
      }
    }
  });
}
