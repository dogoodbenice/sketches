var sdetail;

function setup() {
  createCanvas(1000, 450, WEBGL);
  stroke(50);
  fill(0);
}

function draw() {
  background(230);
  var sdetail = 10;
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  push();
  translate(0,0,0);
  for (var i = 0; i < 20; i ++){
    translate(width/10, 10, 0);
    sphere(60,i,12);
  }
  pop();
  push();
  for (var i = 0; i < 20; i++) {
    translate(0,60,0);
    sphere(60,12,i);
  }
  pop();
}

function mousePressed(){
    fill(random(0,100),random(150,255),random(190,255));
}
