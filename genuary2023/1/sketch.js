let motionSpeed = 20; //this dampens the frame rate along with changing the rotation speed.

let spacing = 30; // the higher the spacing the higher the distance between items inside the motion function

let shapeNumber = getRandomInt() // to get a random number of shapes to be generated

let funspinfloatNumber = getRandomInt() // to get a random non whole number for fun spin

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

function getRandomInt() {
  return Math.random();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0,100,255);
  motion();
}

function motion() {
  translate(100,100)
  for (var x = 1; x < 10; x++) {
    for (var y = 1; y < 10; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x * spacing, y * spacing);
      noFill();
      stroke(255);
      rotate((frameCount / motionSpeed + funSpin));
      strokeWeight(2);
      stroke(255);
      ellipse(spacing/3, spacing/3, 10)
      pop();
    }
  }
}

function keyPressed() {
  // this will download the first 6 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5.5);
  }
}