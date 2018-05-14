var s;

function setup() {
  createCanvas(1000, 450, WEBGL);
  stroke(50);
  s = 1;
  frameRate(10);
}

function draw() {
  background(230);
  rotateX(millis() / 1000);
  rotateZ(millis()/10000);
  push();
  for (var i = 0; i < s; i ++){
    translate(0 + (i*random(-20,20)), i + 1, 0);
    box(random(5,50));
  }
  pop();
}


function mousePressed(){
  s = s + 1;
}
