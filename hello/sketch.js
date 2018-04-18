function setup() {
  createCanvas(600,600);

}

function draw() {
  background(0);
  fill(mouseX,mouseY,mouseX-mouseY);
  textSize(100);
  text("Hello World",100,200);
}
