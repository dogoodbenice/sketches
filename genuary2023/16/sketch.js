let angles = [];
let angleV = [];
let r = 4;

function setup() {
  createCanvas(600, 400);
  let total = floor(width / (r * 2));
  for (let i = 0; i < total + 1; i++) {
    angles[i] = map(i, 0, total, 0, 2 * TWO_PI);
    // angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(0);
  translate(300, 200);
  fill(252, 238, 33);
  stroke(252, 238, 33);
  beginShape();

  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]), -1, 1, -200, 200);
    strokeWeight(4);
    let x = map(i, 0, angles.length, -300, 300);
    // line(x, 0, x, y);
    circle(x, y, r * 2);
    // vertex(x,y);
    angles[i] += 0.02;
    // angles[i] += angleV[i];
  }
  endShape();
}
