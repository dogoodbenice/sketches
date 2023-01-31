let motionSpeed = 65; //this dampens the frame rate along with changing the rotation speed.
let spacing = 40; // the higher the spacing the higher the distance between items inside the motion function

let shapeNumber, funspinfloatNumber, r, g, b;

function setup() {
  createCanvas(600, 600);
  shapeNumber = int(random(1,5));
  funspinfloatNumber = (random(1,5));
  r = random(0,150);
  g = random(100,160);
  b = 255;
  console.log(r,g)
  
}

function draw() {
  background(r,g,b);
  translate(100,80);
  motion1();
  translate(200,8);
  motion3();
  translate(200,0.8);
  motion2();
}

function motion1() {
  for (var x = 1; x < 10; x++) {
    for (var y = 1; y < 10; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x, y * spacing*1.1);
      noFill();
      stroke(255);
      rotate((frameCount / motionSpeed + funSpin));
      text('Thanks',spacing,spacing)
      pop();
    }
  }
}

function motion2() {
  for (var x = 1; x < 10; x++) {
    for (var y = 1; y < 10; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x, y * spacing*1.1);
      noFill();
      stroke(255);
      rotate((frameCount / motionSpeed - funSpin));
      text('Thanks',spacing,spacing)
      pop();
    }
  }
}

function motion3(){
  for (var x = 1; x < 20; x++) {
    for (var y = 1; y < 10; y++) {
      let funSpin = (x/funspinfloatNumber + y/funspinfloatNumber);
      push();
      translate(x, y * spacing*1.1);
      fill(255);
      //stroke(255);
      rotate((frameCount / motionSpeed + (funSpin+funSpin)));
      text('Thanks',spacing,spacing)
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