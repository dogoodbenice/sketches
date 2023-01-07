let circleRadius;
let stripeCount;
let stripeThickness;
let stripeColors;

function setup() {
  createCanvas(600, 600);
  circleRadius = 150;
  stripeCount = 8;
  rectMode(CENTER);
  frameRate(1);
  stripeThickness = circleRadius / stripeCount;
  stripeLength = circleRadius - stripeThickness / 2;
  stripeColors = [color(213, 131, 91), color(214, 121, 103), color(184, 106, 93), color(210, 116, 134), color(171, 98, 125), color(163, 109, 143), color(119, 108, 138), color(51, 62, 84)];
}

function draw(){
  background(220, 217, 200);
  // Draw the circle
  stroke([Math.floor(Math.random() * stripeColors.length)]);
  noFill();
  strokeWeight(10);
  //ellipse(width / 2, height / 2, circleRadius * 3.8);

  // Draw the circles
  for (let i = 0; i < stripeCount; i++) {
    let shapeChoice = Math.floor(random(0, 3))

    let angle = 2 * PI / stripeCount * i;
    let x = width / 2 + circleRadius * cos(angle);
    let y = height / 2 + circleRadius * sin(angle);
    let c = stripeColors[i];
    fill(c);
    noStroke();

    if (shapeChoice == 0) {
      ellipse(x, y, stripeThickness * 10);
    } else if (shapeChoice == 1) {
      rect(x, y, stripeThickness * 9);
    } else if (shapeChoice == 2) {
      let triangleSize = 100
      triangle(x, y-triangleSize, x-(triangleSize-15), y+(triangleSize-15), x+(triangleSize-15), y+(triangleSize-15))
    } else {
      ellipse(x, y, stripeThickness * 50);
    }
  }

}

function keyPressed() {
  // this will download the first 6 seconds of the animation!
  if (key === 's') {
    saveGif('sampled', 6);
  }
}