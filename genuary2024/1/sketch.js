let motionSpeed = 20; //this dampens the frame rate along with changing the rotation speed.
let spacing = 20; // the higher the spacing the higher the distance between items inside the motion function
let shapeNumber = getRandomInt() // to get a random number of shapes to be generated
let funspinfloatNumber = getRandomInt() // to get a random non whole number for fun spin

console.log(shapeNumber)

function getRandomInt() {
  return Math.random();
}

function setup() {
  createCanvas(550, 550);
}

function draw() {
  //lil switcheroo for the old background colour
  if (shapeNumber > 0.5) {
    background(0);
  } else {
    background(180);
  }
  //the main thing that's happening
  motion();
}

function motion() {
translate(-20,-20)
  for (var x = 1; x < 30; x++) {
    for (var y = 1; y < 30; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x * spacing, y * spacing);
      noFill();
      rotate((frameCount / motionSpeed + funSpin));
      strokeWeight(2);
      stroke(0,255,255);
      ellipse(spacing/3, spacing/3, 10)
      pop();
    }
  }
  for (var x = 1; x < 30; x++) {
    for (var y = 1; y < 30; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x * spacing, y * spacing);
      noFill();
      rotate((frameCount / motionSpeed));
      strokeWeight(2);
      stroke(255,0,0);
      ellipse(spacing/2, spacing/2, 10)
      pop();
    }
  }
}

function keyPressed() {
  // this will download the first ~6 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5.5);
  }
}