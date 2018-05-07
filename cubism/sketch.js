var img;

function setup() {
  createCanvas(1000, 450, WEBGL);
  stroke(50);
  img = loadImage("images/cubism.jpg");
}

function draw() {
  background(230);
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  push();
  for (var i = 0; i < 10; i ++){
    translate(10 + (i*20), height/2, 0);
    box(50,50,50,mouseX/20,mouseY/20);
    texture(img);
  }
  pop();
  push();
  for (var i = 0; i < 10; i ++){
    translate(40 + (i*20), height/2, 0);
    box(50,50,50,mouseX/20,mouseY/20);
  }
  pop();
  push();
  for (var i = 0; i < 10; i ++){
    translate(70 + (i*20), height/2, 0);
    box(50,50,50,mouseX/20,mouseY/20);
  }
  pop();
  push();
  for (var i = 0; i < 10; i ++){
    translate(100 + (i*20), height/2, 0);
    box(50,50,50,mouseX/20,mouseY/20);
  }
  pop();
  push();
  for (var i = 0; i < 10; i ++){
    translate(130 + (i*20), height/2, 0);
    box(50,50,50,mouseX/20,mouseY/20);
  }
  pop();
}
