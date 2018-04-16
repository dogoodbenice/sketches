var x = 500;
var y = 500;

function setup() {
createCanvas(1000,450);
noStroke();
background(0);
}

function draw() {
}

function mouseClicked(){
var value = random(0,100);
  if (value < 5) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 10) {
    fill(random(255),random(6,255),random(10,255));
  } else if (value < 15) {
    fill(random(2,255),random(5,255),random(10,255));
  } else if (value < 20) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 25) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 30) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 35) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 40) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 45) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 50) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 55) {
    fill(random(255),random(250,255),random(10,255));
  } else if (value < 60) {
    fill(random(255),random(150,255),random(10,255));
  } else if (value < 65) {
    fill(random(255),random(55,255),random(10,255));
  } else if (value < 70) {
    fill(random(255),random(15,255),random(10,255));
  } else if (value < 75) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 80) {
    fill(random(255),random(255),random(10,255));
  } else if (value < 85) {
    fill(random(255),random(60,255),random(10,255));
  } else if (value < 90) {
    fill(random(255),random(200,255),random(10,255));
  } else if (value < 95) {
    fill(random(255),random(255),random(10,255));
  }
  for (var i = 0; i < 16; i++) {
    rect(80 * i, (frameCount%height), 40, 40);
  }
}

function keyPressed() {
background(0);
}
