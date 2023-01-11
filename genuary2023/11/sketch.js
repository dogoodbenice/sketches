function setup() {
  noStroke();
  createCanvas(600, 600);

  //Shapes
  background(250, 250, 250);
  blueCross(random(100,500),random(100,500))
  rotatedRects(random(100,500),random(100,500))
  rotatedRects(random(100,500),random(100,500))
  blueCross(random(10,300),random(100,300))
  singularSquare(random(100,500),random(100,500))
  singularSquare(random(100,500),random(100,500))
  singularCircle(random(100,500),random(100,500));
}

function singularCircle(x,y){
  fill(167, 34, 2)
  noStroke();
  circle(x, y, 100);
}

function singularSquare(x,y){
  fill(8, 6, 26)
  push();
  rotate(random(1))
  noStroke();
  rect(x, y, 100, 100)
  pop();
}

function rotatedRects(x,y){
  push();
  rotate(random(1))
  fill(151, 30, random(50))
  noStroke();
  rect(x, y+30, 350, 55, 0);
  
  fill(185)
  noStroke();
  rect(x, y, 140, 20)
  rect(x, y+50, 140, 20)
  pop();
}

function blueCross(x,y){
  push()
  rotate(random(1))
  noStroke();
  fill(2, 4, 114)
  rect(x, y, 10, 450);
  fill(2, 40, 114)
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