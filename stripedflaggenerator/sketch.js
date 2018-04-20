var c1;
var c2;
var c3;
var xpos;
var ypos;
var rw;
var rh;
var spacex;
var spacey;

function setup() {
createCanvas(1000,450);
noStroke();
background(0);
}

function draw() {
var rw = 500;
  var rh = 90;
  var xpos = width/4;
  var ypos = xpos - 180;
  var spacex = 10;
  var spacey = 90;
  //first row
   fill(c1, c2, c3);
  rect(xpos, ypos, rw, rh);
  rect(xpos+spacex, ypos, rw, rh);
  //second row  
  fill(c2, c1, c3);
  rect(xpos, ypos+spacey, rw, rh);
  rect(xpos+spacex, ypos+spacey, rw, rh);
  //third row  
  fill(c3, c2, c1);
  rect(xpos, ypos+(spacey*2), rw, rh);
  rect(xpos+spacex, ypos+(spacey*2), rw, rh);
}

function mouseClicked() {
  c1 = random(0, 150);
  c2 = random(0, 150);
  c3 = random(0, 255);  
  background(0);
  println("C1 is", c1);
  println("C2 is", c2);
  println("C3 is", c3);
}


