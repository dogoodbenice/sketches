var stringfat = 1;
var fill1, fill2, fill3 = 0;
var stringstyle = 1;

function setup() {
  createCanvas(1200,450);
  ellipseMode(CENTER);
  rectMode(CENTER);
}
function draw() {
  var stringxpos = width/2;
  var stringypos = height/2;
  stroke(fill1,fill2,fill3);
  strokeWeight(stringfat);
  if (stringstyle <2) {
    strokeCap = (ROUND);
  } else if (stringstyle >3) {
    strokeCap = (SQUARE);
  }
  //the string
  line(mouseX,mouseY,stringxpos,stringypos);
}

function mousePressed(){
  stringfat = random(1,10);
  fill1 = random(0,255);
  fill2 = random(0,255);
  fill3 = random(0,255);
  stringstyle = random(1,4);
  print(stringfat);
  print(stringstyle);
}
