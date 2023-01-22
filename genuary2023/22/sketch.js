let rotatespeed;
let r, g, b;

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  smooth();
  rotatespeed = random(2000,10000)
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
}

function draw() {
  background(0);
  ambientLight(255);

  pointLight(r, g, b, 0, 0, 0);
  specularMaterial(250);
  shininess(25);

  torus(60, 12, 50, 20);
  
  rotateY(millis() / rotatespeed);
  torus(30, 12, 50, 20);

  rotateY(millis() / rotatespeed*1.2);  
  torus(90, 12, 50, 20);

  rotateY(millis() / rotatespeed*1.3);
  torus(120, 12, 150, 120);
  
  rotateY(millis() / rotatespeed*1.4);
  torus(150, 12, 150, 120);

  
  rotateY(millis() / rotatespeed*1.5);
  torus(180, 12, 150, 120);

  rotateY(millis() / rotatespeed*1.6);
  torus(210, 12, 150, 120);
}

function keyPressed() {
  // this will download the first 3 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 3.5);
  }
}