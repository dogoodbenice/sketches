let probabilityThreshold = 0.5;

function setup() {
  ellipseMode(CENTER)
  rectMode(CENTER);
  createCanvas(700, 700);
  noStroke();
  //colorMode(HSB, 10);
  fill(random(0, 255), random(0, 255), random(20, 255));
  rect(100, 200, 100);

  fill(random(0, 255), random(0, 255), random(20, 255));
  ellipse(250, 200, 100);
  ellipse(300, 200, 100);

  fill(random(0, 255), random(0, 255), random(20, 255));
  triangle(500, 200, 450, 150, 400, 200);
  triangle(500, 200, 450, 250, 400, 200);

  fill(random(0, 255), random(0, 255), random(20, 255));
  ellipse(600, 200, 100);

  strokeWeight(15);
  if (random() > probabilityThreshold) {
    rect(100, 200, 100);
    stroke(random(0, 255), random(0, 255), random(20, 255))
    strokeWeight(random(15,20));
    strokeCap(SQUARE);
    fill(random(0, 255), random(0, 255), random(20, 255));
    triangle(500, 200, 450, 250, 400, 200);
  } else {
    strokeWeight(random(15,20));
    strokeCap(ROUND);
    stroke(random(0, 255), random(0, 255), random(20, 255))
    rect(450, 200, 100);
    fill(random(0, 255), random(0, 255), random(20, 255));
    ellipse(300, 200, 100);
  }
  line(100, 400, 600, 400);
}

function keyPressed() {
  // this will download the generation
  if (key === 's') {
    saveCanvas('quick pallete', 'jpg');
  }
}
