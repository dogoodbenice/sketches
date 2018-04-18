function setup() {
  createCanvas(600,600);

}

function draw() {
  background(0);
  fill(mouseX,mouseY,mouseX-mouseY);
  textSize(300);
  text("Hello World",300,200);
}
