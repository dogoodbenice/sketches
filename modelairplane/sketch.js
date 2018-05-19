var from = color(218, 165, 32);
var to = color(72, 61, 139);

function setup() {
  createCanvas(1000, 450, WEBGL);
  noStroke();
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);
}

function draw() {
  background(5,107,134);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.001);
  orbitControl();
  //engine main
  push();
  fill(245,15,15);
  translate(0,0,0);
  box(20,50);
  pop();
  //enginge conector
  push();
  fill(255);
  translate(-20,0,0);
  rotateZ(1.6);
  cone(20, 25);
  pop();
  //propellor
  push();
  fill(0);
  rotateX(frameCount * 0.1);
  translate(-32,0,0);
  box(10,150,5);
  pop();
  //cockpit
  push();
  fill(209,11,11);
  translate(40,0,0);
  box(65,65);
  pop();
  //glass
  push();
  fill(200);
  translate(40,0,25);
  stroke(255);
  sphere(30,10,10);
  pop();
  //box seat
  push();
  fill(183,7,7);
  translate(100,0,0);
  cylinder(50,30);
  pop();
  //wing
  push();
  fill(134,5,8);
  translate(105,0,0);
  box(50,320,5);
  pop();
  //tail
  push();
  fill(157,6,6);
  translate(160,0,0);
  box(60,40);
  pop();
  //bottom tail fin
  push();
  fill(134,5,5);
  translate(200,0,0);
  box(20,70,5);
  pop();
  //bottom tail fin
  push();
  fill(134,5,5);
  translate(200,0,20);
  box(20,5,60);
  pop();
}

function mousePressed(){
  c = color((int(random(0,255))),(int(random(0,255))),(int(random(0,255))));
}
