let refreshInterval = 2500; // Time in milliseconds (2.5 seconds)
let lastRefreshTime = 0;
let curves = [];

function setup() {
  createCanvas(600, 600);
  strokeCap(SQUARE);
  angleMode(DEGREES);
  createCurves(); // Create initial set of curves
}

function draw() {
  background("#000000");

  // Check if it's time to refresh
  if (millis() - lastRefreshTime > refreshInterval) {
    curves = []; // Clear existing curves
    createCurves(); // Generate new curves
    lastRefreshTime = millis(); // Update last refresh time
  }

  for (let i = 0; i < curves.length; i++) {
    drawCurve(curves[i], i * 5);
  }
}

function createCurves() {
    let numCurves = int(random(1, 6)); // Random number of curves each refresh
    for (let i = 0; i < numCurves; i++) {
        createCurve();
    }
}

function createCurve() {
    let x1 = random(-width/4, width/4);
    let y1 = random(-height/4, height/4);
    let x2 = random(-width/4, width/4);
    let y2 = random(-height/4, height/4);
    let x3 = random(-width/4, width/4);
    let y3 = random(-height/4, height/4);
    let x4 = random(-width/4, width/4);
    let y4 = random(-height/4, height/4);

    curves.push({x1, y1, x2, y2, x3, y3, x4, y4});
}

function drawCurve(curve, rotationOffset) {
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.5 + rotationOffset);

  let offset = 5;
  strokeWeight(random(1, 20));
  noFill();

  for (let i = 0; i < 5; i++) {
    let alpha = map(i, 0, 4, 255, 100);
    stroke(115, 222, 201, alpha);
    bezier(curve.x1 + i*offset/2, curve.y1 + i*offset/2, curve.x2 + i*offset/2, curve.y2 + i*offset/2, curve.x3 + i*offset/2, curve.y3 + i*offset/2, curve.x4 + i*offset/2, curve.y4 + i*offset/2);
  }
  
  strokeWeight(4);
  stroke(54, 105, random(10, 100));
  bezier(curve.x1, curve.y1, curve.x2, curve.y2, curve.x3, curve.y3, curve.x4, curve.y4);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('curve', 'jpg');
  }
}