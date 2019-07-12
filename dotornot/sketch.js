//Not going to lie I wasn't really sure what I was planing on this one.

var ellipsex;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  ellipsex = windowWidth / 18;
  ellipseMode(CENTER);
  rectMode(CENTER);
  let from = color(200, 20, 200);
  let to = color(20, 180, 180);
  blendMode(MULTIPLY);
  for (var i = 0; i < 40; i++) {
    for (var y = 0; y < 40; y++) {
      fill(from);
      ellipse(ellipsex * [i], 60 * [y], 50, 50);
      fill(to);
      ellipse(ellipsex * [i], 60 * [y], 20, 20);
    }
  }
}

function draw() {
  fill(mouseX/3, 20, mouseY/2);
  if (mouseIsPressed) {
    blendMode(OVERLAY);
    ellipse(mouseX, mouseY, 50);
    print(mouseX*2);
    print(mouseY/2);
  } else {
    blendMode(MULTIPLY);
    rect(mouseX,mouseY,50,50);
  }
}
