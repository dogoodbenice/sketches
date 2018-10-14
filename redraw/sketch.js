var value = 0;
var design;
var shapesize;

function setup() {
	createCanvas(1200,500);
	background(255);
	noStroke();
}

function draw() {
var shapesize = random(10,55);
  if (design == 1) {
    ellipse(mouseX,mouseY,shapesize,shapesize);
    fill(random(200),255,random(200));
  }
  if (design == 2) {
    rect(mouseX,mouseY,shapesize,shapesize);
    fill(255,random(200),random(200));
  }
  if (design == 3) {
    ellipse(mouseX,mouseY,shapesize,shapesize);
    fill(random(200),random(200),255);
  }
  if (design == 4){
    rect(mouseX,mouseY,shapesize,shapesize);
    fill(255,random(200),255);
  }
}

function mouseMoved(){
  value = value +3;
  if (value <= 30) {
    design = 1;
  }
  if (value >= 60){
    design = 2;
  }
  if (value >= 90){
    design = 3;
  }
  if (value >= 120) {
    design = 4;
  }
  if (value >= 150){
    value = 0;
  }
}
