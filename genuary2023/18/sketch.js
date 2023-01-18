let angle = 0;
let s;

function setup() {
  createCanvas(600, 600);
  frameRate(45);
  s = random(5,30);
}

function draw() {
  angle -= 0.1;
  background(240);
  noStroke();
  
  for (let i = 0; i < 20; i++) {
    let x = map(i, 0, 20, 0, width+100);
    let y = height/2 + sin(angle + i/4) * 100;
    
    //black
    y = height/2 + sin(angle + i/4) * (s*4);
    fill(0,0,0,200);
    ellipse(x, y,s*10);

    //cyan
    y = height/2 + sin(angle + i/4) * (s*4.2);
    fill(255,0,0,200);
    ellipse(x, y,s*10);

    //red
    y = height/2 + sin(angle + i/4) * (s*4);
    fill(255,0,0,200);
    fill(0,255,255,200);
    ellipse(x, y,s*10);
    
  }
  
}

function keyPressed() {
  // this will download the first 3 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 3.5);
  }
}

