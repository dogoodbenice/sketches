// Social Investment Simulator - Core Logic & Visualizations

let decayChart = null;
let recyclingChart = null;
let waterfallChart = null;

const BASE_DEFAULT_RATE = 80;
const BASE_FRICTION_COST = 5;
const FRICTION_LIFT_PER_10PP = 1.3;
const FRICTION_MIN = 0;
const FRICTION_MAX = 40;

const URL_KEYS = {
  c: 'initial-capital',
  h: 'time-horizon',
  g: 'annual-grant',
  a: 'si-allocation',
  s: 'strategy-type',
  d: 'default-rate',
  m: 'winner-moic',
  f: 'friction-cost',
  i: 'impact-factor',
  t: 'treasury-rate',
  o: 'annual-origination'
};

let syncingLinkedSliders = false;
let applyingUrl = false;
let activePreset = null;
let presetCustomized = false;

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
    body: 'An evergreen pool is capital that is meant to keep turning over rather than being spent once. Repayments (revenue share in years 2–5) go back into the same pot, and leftover cash after grants is reinvested into new vintages. That only holds if write-offs are kept in check — so this preset buys a 30% default rate with heavier sourcing spend, a 40% SI allocation, and a 12-year watch window.'
  }
};

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

function formatGBP(val) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);
}

function formatPctLabel(val) {
  const n = parseFloat(val);
  const shown = Number.isInteger(n) ? String(n) : n.toFixed(1);
  return `${shown}%`;
}

function isUnlinked() {
  return document.getElementById('unlink-friction')?.checked === true;
}

function isReinvestOn() {
  return document.getElementById('reinvest-returns')?.checked === true;
}

function presetValues(preset) {
  const table = {
    pure_grant: {
      'initial-capital': 1000000,
      'time-horizon': 10,
      'annual-grant': 100000,
      'si-allocation': 0,
      'strategy-type': 'debt_loans',
      'default-rate': 80,
      'winner-moic': 2.5,
      'friction-cost': frictionFromDefault(80),
      'impact-factor': 1.5,
      'treasury-rate': 3,
      'annual-origination': 0,
      reinvest: false,
      unlink: false
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
      'impact-factor': 1.8,
      'treasury-rate': 3,
      'annual-origination': 0,
      reinvest: false,
      unlink: false
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
      'impact-factor': 1.5,
      'treasury-rate': 3,
      'annual-origination': 0,
      reinvest: false,
      unlink: false
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
      'impact-factor': 1.5,
      'treasury-rate': 3,
      'annual-origination': 0,
      reinvest: true,
      unlink: false
    }
  };
  return table[preset];
}

function setPresetExplainer(preset, customized) {
  const nameEl = document.getElementById('preset-explainer-name');
  const bodyEl = document.getElementById('preset-explainer-body');
  const resetBtn = document.getElementById('reset-preset-btn');
  const copy = PRESET_COPY[preset];

  if (!nameEl || !bodyEl) return;

  if (!copy) {
    nameEl.innerText = 'Custom mix';
    bodyEl.innerText = 'Sliders have been moved off the presets. Lower default / write-off rates automatically raise sourcing & deal friction unless you unlock them for a stress test.';
    if (resetBtn) resetBtn.classList.add('hidden');
    return;
  }

  nameEl.innerText = customized ? `${copy.name} (adjusted)` : copy.name;
  bodyEl.innerText = customized
    ? `${copy.body} You have moved controls away from this preset’s starting points.`
    : copy.body;
  if (resetBtn) resetBtn.classList.toggle('hidden', !customized);
}

function highlightPreset(preset) {
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('preset-active', btn.dataset.preset === preset && !presetCustomized);
  });
}

function loadScenario(preset, fromUrl) {
  const values = presetValues(preset);
  if (!values) return;

  syncingLinkedSliders = true;
  Object.entries(values).forEach(([id, val]) => {
    if (id === 'reinvest') {
      document.getElementById('reinvest-returns').checked = val;
      return;
    }
    if (id === 'unlink') {
      document.getElementById('unlink-friction').checked = val;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
  syncingLinkedSliders = false;

  activePreset = preset;
  presetCustomized = false;
  setPresetExplainer(preset, false);
  highlightPreset(preset);
  updateLabels();
  runSimulation({ skipUrl: fromUrl });
}

function readControls() {
  return {
    initialCapital: parseFloat(document.getElementById('initial-capital').value),
    timeHorizon: parseInt(document.getElementById('time-horizon').value, 10),
    annualGrant: parseFloat(document.getElementById('annual-grant').value),
    siAllocationPct: parseFloat(document.getElementById('si-allocation').value) / 100,
    strategyType: document.getElementById('strategy-type').value,
    defaultRatePct: parseFloat(document.getElementById('default-rate').value) / 100,
    winnerMOIC: parseFloat(document.getElementById('winner-moic').value),
    frictionCostPct: parseFloat(document.getElementById('friction-cost').value) / 100,
    impactFactor: parseFloat(document.getElementById('impact-factor').value),
    treasuryRate: parseFloat(document.getElementById('treasury-rate').value) / 100,
    annualOrigination: parseFloat(document.getElementById('annual-origination').value),
    reinvest: isReinvestOn()
  };
}

function writeUrlState() {
  if (applyingUrl) return;
  const params = new URLSearchParams();
  Object.entries(URL_KEYS).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) params.set(key, el.value);
  });
  params.set('r', isReinvestOn() ? '1' : '0');
  params.set('u', isUnlinked() ? '1' : '0');
  if (activePreset) params.set('p', activePreset);
  const qs = params.toString();
  const next = `${location.pathname}?${qs}${location.hash}`;
  history.replaceState({}, '', next);
}

function applyUrlState() {
  const params = new URLSearchParams(location.search);
  if (![...params.keys()].length) return false;

  applyingUrl = true;
  const preset = params.get('p');
  if (preset && presetValues(preset)) {
    loadScenario(preset, true);
  }

  Object.entries(URL_KEYS).forEach(([key, id]) => {
    if (!params.has(key)) return;
    const el = document.getElementById(id);
    if (el) el.value = params.get(key);
  });
  if (params.has('r')) document.getElementById('reinvest-returns').checked = params.get('r') === '1';
  if (params.has('u')) document.getElementById('unlink-friction').checked = params.get('u') === '1';

  if (preset && presetValues(preset)) {
    activePreset = preset;
    presetCustomized = scenarioDiffersFromPreset(preset);
    setPresetExplainer(preset, presetCustomized);
    highlightPreset(preset);
  } else {
    activePreset = null;
    presetCustomized = true;
    setPresetExplainer(null, true);
    highlightPreset(null);
  }
  applyingUrl = false;
  updateLabels();
  return true;
}

function scenarioDiffersFromPreset(preset) {
  const values = presetValues(preset);
  if (!values) return true;
  for (const [id, val] of Object.entries(values)) {
    if (id === 'reinvest') {
      if (isReinvestOn() !== val) return true;
      continue;
    }
    if (id === 'unlink') {
      if (isUnlinked() !== val) return true;
      continue;
    }
    const el = document.getElementById(id);
    if (!el) continue;
    if (parseFloat(el.value) !== parseFloat(val) && String(el.value) !== String(val)) return true;
  }
  return false;
}

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
    'impact-factor',
    'treasury-rate',
    'annual-origination',
    'reinvest-returns',
    'unlink-friction'
  ];

  const onChange = (id) => {
    if (syncingLinkedSliders || applyingUrl) {
      updateLabels();
      runSimulation();
      return;
    }

    if (id === 'unlink-friction' && !isUnlinked()) {
      const frictionEl = document.getElementById('friction-cost');
      const defaultEl = document.getElementById('default-rate');
      frictionEl.value = frictionFromDefault(parseFloat(defaultEl.value));
    }

    if (!isUnlinked()) {
      if (id === 'default-rate') {
        syncingLinkedSliders = true;
        document.getElementById('friction-cost').value = frictionFromDefault(
          parseFloat(document.getElementById('default-rate').value)
        );
        syncingLinkedSliders = false;
      } else if (id === 'friction-cost') {
        syncingLinkedSliders = true;
        document.getElementById('default-rate').value = defaultFromFriction(
          parseFloat(document.getElementById('friction-cost').value)
        );
        syncingLinkedSliders = false;
      }
    }

    if (activePreset) {
      presetCustomized = scenarioDiffersFromPreset(activePreset);
      setPresetExplainer(activePreset, presetCustomized);
    } else {
      setPresetExplainer(null, true);
    }
    highlightPreset(activePreset);

    updateLabels();
    runSimulation();
  };

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const evt = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(evt, () => onChange(id));
  });

  document.getElementById('reset-preset-btn')?.addEventListener('click', () => {
    if (activePreset) loadScenario(activePreset);
  });
  document.getElementById('copy-link-btn')?.addEventListener('click', async () => {
    writeUrlState();
    const btn = document.getElementById('copy-link-btn');
    try {
      await navigator.clipboard.writeText(location.href);
      btn.innerText = 'Link copied';
    } catch (err) {
      btn.innerText = 'Copy the address bar';
    }
    setTimeout(() => { btn.innerText = 'Copy scenario link'; }, 1600);
  });
  document.getElementById('print-pack-btn')?.addEventListener('click', () => window.print());

  updateLabels();
}

function updateLabels() {
  const mappings = [
    { slider: 'initial-capital', label: 'initial-capital-val', fmt: formatGBP },
    { slider: 'time-horizon', label: 'time-horizon-val', fmt: (v) => `${v} Years` },
    { slider: 'annual-grant', label: 'annual-grant-val', fmt: formatGBP },
    { slider: 'si-allocation', label: 'si-allocation-val', fmt: formatPctLabel },
    { slider: 'default-rate', label: 'default-rate-val', fmt: formatPctLabel },
    { slider: 'winner-moic', label: 'winner-moic-val', fmt: (v) => `${v}x` },
    { slider: 'friction-cost', label: 'friction-cost-val', fmt: formatPctLabel },
    { slider: 'impact-factor', label: 'impact-factor-val', fmt: (v) => `${v}x` },
    { slider: 'treasury-rate', label: 'treasury-rate-val', fmt: formatPctLabel },
    { slider: 'annual-origination', label: 'annual-origination-val', fmt: formatGBP }
  ];

  mappings.forEach(m => {
    const slider = document.getElementById(m.slider);
    const label = document.getElementById(m.label);
    if (slider && label) label.innerText = m.fmt(slider.value);
  });
}

function addVintageReturns(returnsByYear, vintageYear, siReturns, strategy, H) {
  if (siReturns <= 0) return;
  if (strategy === 'revenue_share') {
    for (let offset = 2; offset <= 5; offset++) {
      const y = vintageYear + offset;
      if (y >= 1 && y <= H) returnsByYear[y] += siReturns / 4;
    }
  } else if (strategy === 'debt_loans') {
    for (let offset = 1; offset <= 5; offset++) {
      const y = vintageYear + offset;
      if (y >= 1 && y <= H) returnsByYear[y] += siReturns / 5;
    }
  } else if (strategy === 'venture_equity') {
    const y = vintageYear + 7;
    if (y >= 1 && y <= H) returnsByYear[y] += siReturns;
  }
}

function originateVintage(amount, D, M, F) {
  const friction = amount * F;
  const deployed = amount * (1 - F);
  const defaulted = deployed * D;
  const winning = deployed * (1 - D);
  const returns = winning * M;
  return { friction, deployed, defaulted, winning, returns };
}

function exhaustionYear(track, G, H) {
  for (let k = 1; k <= H; k++) {
    if (track[k].grantSpent + 0.5 < G) return k;
  }
  return null;
}

function fullCommitteeYears(track, G) {
  return track.filter(y => y.year > 0 && y.grantSpent + 0.5 >= G).length;
}

function runSimulation(opts = {}) {
  const p = readControls();
  const result = runSimulationEngine(p);

  updateKPICards(result, p);
  updateVerdict(result, p);
  updateSensitivity(p);
  updateAssumptions(p);
  renderDecayChart(result.trackA, result.trackB, result.trackC, p);
  renderRecyclingChart(result.trackB, p.timeHorizon);
  renderWaterfallChart(result.siDetails);
  if (!opts.skipUrl) writeUrlState();
}

function runSimulationEngine(p) {
  const { initialCapital: C0, timeHorizon: H, annualGrant: G, siAllocationPct: A, strategyType: strategy, defaultRatePct: D, winnerMOIC: M, frictionCostPct: F, impactFactor: I, treasuryRate, annualOrigination, reinvest } = p;

  const trackA = [];
  let balanceA = C0;
  trackA.push({ year: 0, balance: balanceA, grantSpent: 0, cumGrants: 0, socialValue: 0 });
  for (let k = 1; k <= H; k++) {
    const grantSpent = Math.min(balanceA, G);
    balanceA -= grantSpent;
    const cumGrants = trackA[k - 1].cumGrants + grantSpent;
    trackA.push({ year: k, balance: balanceA, grantSpent, cumGrants, socialValue: cumGrants });
  }

  const returnsByYear = new Array(H + 1).fill(0);
  const siAlloc = C0 * A;
  let totalFriction = 0;
  let totalDeployed = 0;
  let totalDefaulted = 0;
  let totalWinning = 0;
  let totalAllocated = siAlloc;

  if (A > 0 && siAlloc > 0) {
    const v0 = originateVintage(siAlloc, D, M, F);
    totalFriction += v0.friction;
    totalDeployed += v0.deployed;
    totalDefaulted += v0.defaulted;
    totalWinning += v0.winning;
    addVintageReturns(returnsByYear, 0, v0.returns, strategy, H);
  }

  const trackB = [];
  let oBalance = C0 * (1 - A);
  let rBalance = 0;
  trackB.push({
    year: 0,
    balance: oBalance + rBalance,
    originalBalance: oBalance,
    recycledBalance: rBalance,
    grantSpent: 0,
    grantSpentFromOriginal: 0,
    grantSpentFromRecycled: 0,
    originationSpent: 0,
    reinvested: 0,
    cumGrants: 0,
    cumGrantsOriginal: 0,
    cumGrantsRecycled: 0,
    returnRecycled: 0,
    socialValue: 0
  });

  for (let k = 1; k <= H; k++) {
    const ret = returnsByYear[k];
    let tempRecycled = trackB[k - 1].recycledBalance + ret;
    let tempOriginal = trackB[k - 1].originalBalance;

    const originationDue = (A > 0 || totalDeployed > 0) ? annualOrigination : 0;
    const origFromOriginal = Math.min(tempOriginal, originationDue);
    tempOriginal -= origFromOriginal;
    const origFromRecycled = Math.min(tempRecycled, originationDue - origFromOriginal);
    tempRecycled -= origFromRecycled;
    const originationSpent = origFromOriginal + origFromRecycled;

    const tempTotal = tempOriginal + tempRecycled;
    const grantSpent = Math.min(tempTotal, G);
    const grantSpentFromOriginal = Math.min(tempOriginal, grantSpent);
    const grantSpentFromRecycled = grantSpent - grantSpentFromOriginal;
    oBalance = tempOriginal - grantSpentFromOriginal;
    rBalance = tempRecycled - grantSpentFromRecycled;

    let reinvested = 0;
    // Keep one year of committee funding in cash; only surplus recycled capital is originated again.
    const surplus = Math.max(0, oBalance + rBalance - G);
    const reinvestAmt = Math.min(rBalance, surplus);
    if (reinvest && reinvestAmt > 1) {
      const vintage = originateVintage(reinvestAmt, D, M, F);
      totalAllocated += reinvestAmt;
      totalFriction += vintage.friction;
      totalDeployed += vintage.deployed;
      totalDefaulted += vintage.defaulted;
      totalWinning += vintage.winning;
      addVintageReturns(returnsByYear, k, vintage.returns, strategy, H);
      reinvested = reinvestAmt;
      rBalance -= reinvestAmt;
    }

    const cumGrantsOriginal = trackB[k - 1].cumGrantsOriginal + grantSpentFromOriginal;
    const cumGrantsRecycled = trackB[k - 1].cumGrantsRecycled + grantSpentFromRecycled;
    const cumGrants = trackB[k - 1].cumGrants + grantSpent;
    const socialValue = cumGrants + totalDeployed * I;

    trackB.push({
      year: k,
      balance: oBalance + rBalance,
      originalBalance: oBalance,
      recycledBalance: rBalance,
      grantSpent,
      grantSpentFromOriginal,
      grantSpentFromRecycled,
      originationSpent,
      reinvested,
      cumGrants,
      cumGrantsOriginal,
      cumGrantsRecycled,
      returnRecycled: ret,
      socialValue
    });
  }

  const totalRecycled = returnsByYear.reduce((sum, val) => sum + val, 0);

  const trackC = [];
  let balanceC = C0;
  trackC.push({ year: 0, balance: balanceC, grantSpent: 0, cumGrants: 0, socialValue: 0 });
  for (let k = 1; k <= H; k++) {
    const interest = balanceC * treasuryRate;
    const tempBalance = balanceC + interest;
    const grantSpent = Math.min(tempBalance, G);
    balanceC = tempBalance - grantSpent;
    const cumGrants = trackC[k - 1].cumGrants + grantSpent;
    trackC.push({ year: k, balance: balanceC, grantSpent, cumGrants, socialValue: cumGrants });
  }

  return {
    trackA,
    trackB,
    trackC,
    siDetails: {
      allocated: totalAllocated,
      friction: totalFriction,
      deployed: totalDeployed,
      defaulted: totalDefaulted,
      winning: totalWinning,
      returns: totalRecycled,
      totalRecycled,
      recoveryRate: totalAllocated > 0 ? (totalRecycled / totalAllocated) : 0,
      realizedMOIC: totalAllocated > 0 ? (totalRecycled / totalAllocated) : 0
    }
  };
}

function updateKPICards(result, p) {
  const { trackA, trackB, trackC, siDetails } = result;
  const H = p.timeHorizon;
  const formatMOIC = (val) => `${val.toFixed(2)}x`;

  const lifespanA = fullCommitteeYears(trackA, p.annualGrant);
  const lifespanB = fullCommitteeYears(trackB, p.annualGrant);
  const lifespanC = fullCommitteeYears(trackC, p.annualGrant);
  const extension = lifespanB - lifespanA;

  const depB = trackB[H].cumGrants + siDetails.deployed;
  const multiplierB = depB / p.initialCapital;
  const sroiA = trackA[H].socialValue / p.initialCapital;
  const sroiB = trackB[H].socialValue / p.initialCapital;
  const sroiC = trackC[H].socialValue / p.initialCapital;

  const extensionEl = document.getElementById('kpi-extension');
  extensionEl.innerText = extension >= 0 ? `+${extension} Years` : `${extension} Years`;
  extensionEl.className = `text-xl font-bold mt-2 ${extension > 0 ? 'text-emerald-600' : extension < 0 ? 'text-red-600' : 'text-slate-900'}`;
  document.getElementById('kpi-extension-sub').innerText = `Committee: Hybrid (${lifespanB}y) vs Grant (${lifespanA}y) vs Treasury (${lifespanC}y)`;

  document.getElementById('kpi-multiplier').innerText = formatMOIC(multiplierB);
  document.getElementById('kpi-multiplier-sub').innerText = `${formatGBP(depB)} total capital deployed`;

  document.getElementById('kpi-recycled').innerText = formatGBP(siDetails.totalRecycled);
  document.getElementById('kpi-recycled-sub').innerText = `From ${formatGBP(siDetails.allocated)} allocated (incl. later vintages)`;

  document.getElementById('kpi-moic').innerText = `${siDetails.realizedMOIC.toFixed(2)}x`;
  document.getElementById('kpi-moic-sub').innerText = `${(siDetails.recoveryRate * 100).toFixed(1)}% cash back vs allocated`;

  document.getElementById('kpi-sroi').innerText = formatMOIC(sroiB);
  document.getElementById('kpi-sroi-sub').innerText = `Illustrative — Hybrid ${formatMOIC(sroiB)} vs Grant ${formatMOIC(sroiA)} vs Treasury ${formatMOIC(sroiC)}`;
}

function updateVerdict(result, p) {
  const { trackA, trackB, trackC, siDetails } = result;
  const H = p.timeHorizon;
  const lifespanA = fullCommitteeYears(trackA, p.annualGrant);
  const lifespanB = fullCommitteeYears(trackB, p.annualGrant);
  const lifespanC = fullCommitteeYears(trackC, p.annualGrant);
  const extension = lifespanB - lifespanA;
  const sroiA = trackA[H].socialValue / p.initialCapital;
  const sroiB = trackB[H].socialValue / p.initialCapital;
  const runwayWin = lifespanB > lifespanA;
  const impactWin = sroiB > sroiA + 0.005;
  const aligned = runwayWin && impactWin && p.siAllocationPct > 0;

  const banner = document.getElementById('verdict-banner');
  const kicker = document.getElementById('win-kicker');
  const title = document.getElementById('win-title');
  const line = document.getElementById('verdict-line');
  const footnote = document.getElementById('win-footnote');

  banner.classList.remove('win-aligned', 'win-mixed', 'win-miss');

  if (p.siAllocationPct <= 0) {
    banner.classList.add('win-miss');
    kicker.innerText = 'Control case';
    title.innerText = 'Pure grants: the committee spends down once';
    line.innerText = `With no social investment, the grants committee lasts ${lifespanA} years. Treasury at ${formatPctLabel(p.treasuryRate * 100)} would last ${lifespanC} years. There is no recycled capital and no extra enterprise impact.`;
    footnote.innerText = 'A committee + impact win needs SI allocation, enough recycling to extend runway, and an illustrative SROI above pure grants.';
    return;
  }

  if (aligned) {
    banner.classList.add('win-aligned');
    kicker.innerText = 'Committee + impact win';
    title.innerText = `This mix extends the grants committee by +${extension} year${extension === 1 ? '' : 's'} and lifts impact`;
    line.innerText = `Hybrid funds the committee for ${lifespanB} years versus ${lifespanA} on pure spend-down. Illustrative SROI moves from ${sroiA.toFixed(2)}x to ${sroiB.toFixed(2)}x because capital is working in enterprises while ${formatGBP(siDetails.totalRecycled)} recycles back to pay later grants${p.reinvest ? ', and leftover repayments are originated into new vintages' : ''}.`;
  } else if (runwayWin || impactWin) {
    banner.classList.add('win-mixed');
    kicker.innerText = 'Partial win — levers not yet aligned';
    if (runwayWin) {
      title.innerText = `Committee lasts longer (+${extension} years), but illustrative impact is not yet ahead`;
      line.innerText = `Recycling is stretching runway to ${lifespanB} years, yet illustrative SROI is ${sroiB.toFixed(2)}x vs ${sroiA.toFixed(2)}x on grants. Try a higher impact factor, more SI at work, or cheaper write-offs (which costs more sourcing).`;
    } else {
      title.innerText = 'Impact looks higher, but the committee does not last longer';
      line.innerText = `Illustrative SROI is ${sroiB.toFixed(2)}x vs ${sroiA.toFixed(2)}x on grants, yet hybrid runway is ${lifespanB} years against ${lifespanA}. Write-offs, friction, or origination are still eating the pot before repayments refill it.`;
    }
  } else {
    banner.classList.add('win-miss');
    kicker.innerText = 'Not yet a win versus spend-down';
    title.innerText = 'This book neither extends the committee nor lifts illustrative impact';
    line.innerText = `Hybrid runway ${lifespanB} years vs ${lifespanA} on grants; illustrative SROI ${sroiB.toFixed(2)}x vs ${sroiA.toFixed(2)}x. Lower write-offs (and the matching sourcing spend), reinvest repayments, or slow the annual grant.`;
  }

  const treasuryNote = lifespanC > lifespanB
    ? `Treasury at ${formatPctLabel(p.treasuryRate * 100)} still funds the committee ${lifespanC - lifespanB} year${lifespanC - lifespanB === 1 ? '' : 's'} longer without social investment — the SI case has to win on impact, not on cash runway alone.`
    : `Treasury at ${formatPctLabel(p.treasuryRate * 100)} lasts ${lifespanC} years; hybrid is ${lifespanB >= lifespanC ? 'at least as long' : `${lifespanC - lifespanB} years shorter`} on cash.`;
  footnote.innerText = treasuryNote;
}

function updateSensitivity(p) {
  const body = document.getElementById('sensitivity-body');
  if (!body) return;
  const rows = [80, 50, 30];
  const currentDefault = Math.round(p.defaultRatePct * 100);
  body.innerHTML = '';

  rows.forEach(d => {
    const sim = runSimulationEngine({
      ...p,
      defaultRatePct: d / 100,
      frictionCostPct: frictionFromDefault(d) / 100
    });
    const lifeA = fullCommitteeYears(sim.trackA, p.annualGrant);
    const lifeB = fullCommitteeYears(sim.trackB, p.annualGrant);
    const sroiB = sim.trackB[p.timeHorizon].socialValue / p.initialCapital;
    const ext = lifeB - lifeA;
    const tr = document.createElement('tr');
    if (Math.abs(currentDefault - d) <= 5) tr.className = 'sensitivity-current';
    tr.innerHTML = `
      <td class="py-2 pr-3">${d}%</td>
      <td class="py-2 pr-3">${formatPctLabel(frictionFromDefault(d))}</td>
      <td class="py-2 pr-3">${formatGBP(sim.siDetails.totalRecycled)}</td>
      <td class="py-2 pr-3">${lifeB} years</td>
      <td class="py-2 pr-3">${ext >= 0 ? '+' : ''}${ext} years</td>
      <td class="py-2">${sroiB.toFixed(2)}x</td>
    `;
    body.appendChild(tr);
  });
}

function updateAssumptions(p) {
  const dl = document.getElementById('assumptions-list');
  if (!dl) return;
  const rows = [
    ['Initial capital', formatGBP(p.initialCapital)],
    ['Horizon', `${p.timeHorizon} years`],
    ['Annual grants committee', formatGBP(p.annualGrant)],
    ['SI allocation', formatPctLabel(p.siAllocationPct * 100)],
    ['Strategy', p.strategyType.replace('_', ' ')],
    ['Write-offs', formatPctLabel(p.defaultRatePct * 100)],
    ['Winner MOIC', `${p.winnerMOIC}x`],
    ['Sourcing / friction', formatPctLabel(p.frictionCostPct * 100)],
    ['Illustrative impact factor', `${p.impactFactor}x`],
    ['Treasury rate', formatPctLabel(p.treasuryRate * 100)],
    ['Annual origination', formatGBP(p.annualOrigination)],
    ['Reinvest repayments', p.reinvest ? 'Yes' : 'No'],
    ['Default–friction link', isUnlinked() ? 'Unlocked (stress test)' : 'On (10pp default ↓ → ~30% more sourcing)']
  ];
  dl.innerHTML = rows.map(([k, v]) => `<div class="flex justify-between gap-3 border-b border-slate-100 py-1"><dt class="text-slate-500">${k}</dt><dd class="font-semibold text-slate-800">${v}</dd></div>`).join('');
}

const exhaustionPlugin = {
  id: 'exhaustionMarkers',
  afterDraw(chart) {
    const marks = chart.options.plugins.exhaustionMarkers?.marks || [];
    const { ctx, chartArea } = chart;
    if (!chartArea) return;
    marks.forEach(mark => {
      if (mark.year == null) return;
      const x = chart.scales.x.getPixelForValue(mark.year);
      ctx.save();
      ctx.strokeStyle = mark.color;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      ctx.fillStyle = mark.color;
      ctx.font = '11px system-ui, sans-serif';
      ctx.fillText(mark.label, x + 4, chartArea.top + 12 + mark.offset);
      ctx.restore();
    });
  }
};

function ensureExhaustionPlugin() {
  if (typeof Chart === 'undefined') return;
  try {
    if (!Chart.registry.plugins.get('exhaustionMarkers')) Chart.register(exhaustionPlugin);
  } catch (err) {
    try { Chart.register(exhaustionPlugin); } catch (ignored) { /* already registered */ }
  }
}

function renderDecayChart(trackA, trackB, trackC, p) {
  ensureExhaustionPlugin();
  const ctx = document.getElementById('decayChart').getContext('2d');
  const H = p.timeHorizon;
  const G = p.annualGrant;
  const labels = Array.from({ length: H + 1 }, (_, i) => `Year ${i}`);
  const dataA = trackA.map(d => d.balance);
  const dataB = trackB.map(d => d.balance);
  const dataC = trackC.map(d => d.balance);
  const exA = exhaustionYear(trackA, G, H);
  const exB = exhaustionYear(trackB, G, H);
  const exC = exhaustionYear(trackC, G, H);
  const caption = document.getElementById('exhaustion-caption');
  const describe = (name, year) => (year == null ? `${name} still pays the full committee through year ${H}` : `${name} first misses the full committee in year ${year}`);
  if (caption) caption.innerText = `${describe('Pure grants', exA)}. ${describe('Hybrid', exB)}. ${describe('Treasury', exC)}.`;

  const treasuryLabel = `Track C (${formatPctLabel(p.treasuryRate * 100)} cash / no social investment)`;
  const marks = [
    { year: exA, color: '#ef4444', label: exA == null ? '' : `Grants dry y${exA}`, offset: 0 },
    { year: exB, color: '#3b82f6', label: exB == null ? '' : `Hybrid dry y${exB}`, offset: 14 },
    { year: exC, color: '#64748b', label: exC == null ? '' : `Treasury dry y${exC}`, offset: 28 }
  ];
  const pointFor = (ex) => dataA.map((_, i) => (ex != null && i === ex ? 5 : 2));

  if (decayChart) {
    decayChart.data.labels = labels;
    decayChart.data.datasets[0].data = dataA;
    decayChart.data.datasets[1].data = dataB;
    decayChart.data.datasets[2].data = dataC;
    decayChart.data.datasets[2].label = treasuryLabel;
    decayChart.data.datasets[0].pointRadius = pointFor(exA);
    decayChart.data.datasets[1].pointRadius = dataB.map((_, i) => (exB != null && i === exB ? 5 : 2));
    decayChart.data.datasets[2].pointRadius = dataC.map((_, i) => (exC != null && i === exC ? 5 : 2));
    decayChart.options.plugins.exhaustionMarkers = { marks };
    decayChart.update();
    return;
  }

  decayChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Track A (Pure Grant Model)',
          data: dataA,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.01)',
          fill: true,
          tension: 0.15,
          borderWidth: 2,
          pointRadius: pointFor(exA)
        },
        {
          label: 'Track B (Hybrid Model)',
          data: dataB,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.04)',
          fill: true,
          tension: 0.15,
          borderWidth: 3,
          pointRadius: dataB.map((_, i) => (exB != null && i === exB ? 5 : 2))
        },
        {
          label: treasuryLabel,
          data: dataC,
          borderColor: '#64748b',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          fill: false,
          tension: 0.15,
          borderWidth: 2,
          pointRadius: dataC.map((_, i) => (exC != null && i === exC ? 5 : 2))
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        exhaustionMarkers: { marks },
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
          title: { display: true, text: 'Remaining Capital Balance' }
        }
      }
    }
  });
}

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
      labels,
      datasets: [
        { label: 'Grants from Original Capital', data: originalG, backgroundColor: '#94a3b8' },
        { label: 'Grants from Recycled Returns', data: recycledG, backgroundColor: '#10b981' }
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
          title: { display: true, text: 'Annual Grants Funded' }
        }
      }
    }
  });
}

function renderWaterfallChart(siDetails) {
  const ctx = document.getElementById('waterfallChart').getContext('2d');
  const allocated = siDetails.allocated;
  const deployed = siDetails.deployed;
  const winning = siDetails.winning;
  const totalRecycled = siDetails.totalRecycled;
  const barData = [
    [0, allocated],
    [deployed, allocated],
    [winning, deployed],
    [winning, totalRecycled],
    [0, totalRecycled]
  ];
  const barColors = ['#3b82f6', '#f97316', '#ef4444', '#10b981', '#8b5cf6'];

  if (waterfallChart) {
    waterfallChart.data.datasets[0].data = barData;
    waterfallChart.data.datasets[0].backgroundColor = barColors;
    waterfallChart.update();
    return;
  }

  waterfallChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Allocated Pool', 'Sourcing / Friction', 'Default Write-offs', 'Outperformance', 'Recycled Returned'],
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
              if (context.dataIndex === 0 || context.dataIndex === 4) {
                return `${context.label}: £${bounds[1].toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;
              }
              const direction = (context.dataIndex === 1 || context.dataIndex === 2) ? '-' : '+';
              return `${context.label}: ${direction}£${diff.toLocaleString('en-GB', { maximumFractionDigits: 0 })}`;
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
          title: { display: true, text: 'Capital Value' }
        }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setupUI();
  const fromUrl = applyUrlState();
  if (fromUrl) {
    runSimulation({ skipUrl: true });
    writeUrlState();
  } else {
    loadScenario('high_loss');
  }
});
