let x,y,z 
let rotatespeed;

function setup() {
  createCanvas(600, 600, WEBGL);
  x = random(-100,100)
  y = random(-30,30)
  rotatespeed = random(2000,100000)
}

function draw() {
  background(0);
  pointLight(255, 255, 255, x, y, 25);
  noStroke();

  push();
  //translate(0,0,0);
  for (var i = 0; i < 7; i++){
    translate(0, 50, 0);
    rotateY(frameCount * 0.01);
    box(50);
    push();

    push();
    rotateX(frameCount * 0.01);
    box(50);
    pop();

    translate(-200, -50, 0);
    rotateY(millis() / rotatespeed);
    rotateX(millis() / rotatespeed);
    box(20);
    pop();
  }
  pop();
  push();
  for (var i = 0; i < 7; i++){
    translate(0, -50, 0);
    rotateY(frameCount * 0.01);
    box(50);

    push();
    rotateX(frameCount * 0.01);
    box(50);
    pop();

    push();
    translate(-200, -50, 0);
    rotateY(millis() / rotatespeed);
    rotateX(millis() / rotatespeed);
    box(20);
    pop();
  }
  pop();
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('shadows', 5);
  }
}