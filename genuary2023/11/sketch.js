let shapeColors = [color(250,252,132), color(48,69,180),color(175,2,0),color(65,50,249),color(31,112,29)];

function setup() {
  noStroke();
  createCanvas(600, 600);
  background(250, 250, 250);

  //   let shapeChoice = Math.floor(random(0, 3))
  //   let c = shapeColors[i];
  //   fill(c);
  blueCross(200,20)
  rotatedRects(250,20)
  blueCross(200,200)
  singularSquare(100,20)
  singularCircle(random(width)+100,random(height)+100);
}

function singularCircle(x,y){
  fill(167, 34, 2)
  noStroke();
  circle(x, y, 100);
}

function singularSquare(x,y){
  fill(8, 6, 26)
  noStroke();
  rect(x, y, 100, 100)
}

function rotatedRects(x,y){
  push();
  rotate(0.25)
  fill(151, 30, 5)
  noStroke();
  rect(x, y+30, 350, 55, 0);
  
  fill(100)
  noStroke();
  rect(x, y, 140, 20)
  rect(x, y+50, 140, 20)
  pop();
}

function blueCross(x,y){
  push()
  rotate(0.30)
  noStroke();
  fill(2, 4, 114)
  rect(x, y, 10, 450);
  rect(x-20, y+40, 60, 10)
  pop()
}

function rects(){
  fill(196, 149, 1)
  noStroke();
  rect(50, 250, 290, 17)
  fill(138, 51, 25)
  rect(180, 300, 160, 17)
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('mySuprematism', 'jpg');
  }
}