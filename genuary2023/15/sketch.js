let amplitude, offset, scalar, speed
let angle = 0;

function setup() {
  createCanvas(600, 600);
  scalar = random(10,50); //effects the amplitude of the sine wave (how far from the offset)
  offset = 300; ; //provides a constant value that offsets the y position
  speed = random(0.05,0.1); //effects the speed of the motion
  amplitude = random(100,150); // Height of wave
}

function draw(){
  background(230);
  noFill();
  strokeWeight(1.1)

  let y1 = offset + sin(angle) * scalar; 
  let y2 = offset + sin(angle + 0.5) * scalar;
  let y3 = offset + sin(angle + 0.65) * scalar;
  let y4 = offset + sin(angle + 0.25) * scalar;
  let y5 = offset + sin(angle + 0.75) * scalar;

  for (let i = 0; i < 600; i+=10) {
    ellipse(0,y2,(sin(i)*amplitude)*3)
    ellipse(100,y1,(sin(i)*amplitude)*2)
    ellipse(300,y3,(sin(i)*amplitude)*3)
    ellipse(350,y3,(sin(i)*amplitude)*2)
    ellipse(500,y4,(sin(i)*amplitude)*3)
    ellipse(600,y5,(sin(i)*amplitude)*2)
  }
  angle += speed; //increment the angle each time through draw(), see what happens if you change this!
}

function keyPressed() {
  // this will download the first 6 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 2.5);
  }
}