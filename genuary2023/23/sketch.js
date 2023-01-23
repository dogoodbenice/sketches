let count;
let angle2 = 0; 
let num; 
let scalar = 70;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  frameRate(20)
  count = int(random(20,30))
  num = int(random(1,10))
}

function draw() {  
  background(255);
  noFill();
  circlePattern(width/2,height/2);
  let ang2 = radians(angle2);
  let y2 = height / 2 + scalar * sin(ang2);
  let x1 = width / 2 + scalar * cos(ang2);
  squarePattern(width/2,height/2)

  circlePattern(width/2,y2);
  circlePattern(x1,y2);
  for (var i = 0; i < count; i++){    
    circlePattern(width/2*i,height/2)
  }
  angle2 += num;
}

function circlePattern(x,y){
  strokeWeight(4);
  for (var i = 0; i < count; i++){    
    ellipse(x,y,20*i);
  }
}

function squarePattern(x,y){
  strokeWeight(4);
  for (var i = 0; i < count; i++){    
    rect(x,y,20*i);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('moire', 5);
  }
}