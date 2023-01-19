let angle = 0;
let s;

function setup() {
  createCanvas(600, 600);
  frameRate(45);
  s = random(20,50);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  angle -= 0.1;
  strokeWeight(2)

  for (let i = 0; i < width / s; i++) {
    for (let j = 0; j < height / s; j++) {
      rect(i * s, j * s, s);
    }
  }
  
  for (let i = 0; i < 20; i++) {
    let x = map(i, 0, 20, 0, width+100);
    let y = height/2 + sin(angle + i/4) * 100;

    ellipse(width / 2, height / 2, i * 20, y);
    ellipse(width / 2, height / 2, y, i* 10);
  }
  
}

function keyPressed() {
  // this will download the first 3 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 3.5);
  }
}

