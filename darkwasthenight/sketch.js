function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  fill(255, 242, 124);
  ellipse(mouseX, height/2, 100, 100);
  fill(0);
  textSize(32);
  text("DARK WAS THE NIGHT", 100, height/1.95);
}
