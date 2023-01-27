let circleRadius;
let stripeCount;
let stripeThickness;
let stripeLength;
let stripeColors;

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
  circleRadius = 150;
  stripeCount = int(random(6,15));
  stripeThickness = 20;
  stripeLength = circleRadius - stripeThickness / 15;
  stripeColors = [color(212, 164, 178), color(251,250,240), color(30,48,124), color(143,133,197), color(39,105,56), color(240,227,99), color(232,186,62), color(213,122,43), color(2,1,8), color(127,125,142), color(222,211,205), color(0, 255, 255), color(0, 0, 255), color(255, 0, 255), color(255, 0, 0), color(255, 255, 255), color(255, 200, 99), color(255, 255, 0), color(90, 255, 240), color(99, 227, 255), color(240,227,99)];
}

function draw() {
  background(176, 60, 39);

  // Draw one of the semicircle
  fill(0)
  ellipse(width / 2, height / 2, 300);
  stroke(255);
  fill(255);
  arc(width/2, height/2, 300, 300, PI + PI, PI, CHORD);
  
  stroke(230);
  fill(145);
  ellipse(width / 2, height / 2, 200);
  fill(145);
  arc(width/2, height/2, 250, 250, PI + PI, PI, CHORD);
  
  // Draw the stripes
  for (let i = 0; i < stripeCount; i++) {
    let angle = 2 * PI / stripeCount * i;
    let x1 = width / 2 + stripeLength / 2 * cos(angle);
    let y1 = height / 2 + stripeLength / 2 * sin(angle);
    let x2 = width / 2 - stripeLength / 2 * cos(angle);
    let y2 = height / 2 - stripeLength / 2 * sin(angle);
    let c = stripeColors[i];
    stroke(c);
    strokeCap(PROJECT);
    strokeWeight(stripeThickness);
    line(x1, y1, x2, y2);
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('hilma', 'jpg');
  }
}