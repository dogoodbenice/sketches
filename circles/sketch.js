function setup() {
  createCanvas(600,400);
  background(0);
}

function draw() {
  fill(mouseX,mouseY,mouseX-mouseY);
  ellipse(mouseX,mouseY,10,10);

}
