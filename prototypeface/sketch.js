var xpos; 
var ypos; 
var spacex;
var tpos;
var fillVal = 120;
var faceVal = 120;
var epos;

function setup() {
createCanvas(1000,480);
noStroke();
}

function draw() {
  var xpos = 100;
  var ypos = 100;
  var tpos = xpos*2;
  var epos = ypos*3;
  var upos = ypos*4;
  var spacex = 70;
  background(0);
  textSize(100);
  fill(fillVal);
  text("P", xpos, ypos);
  text("R", xpos+spacex, ypos);
  text("O", xpos+spacex*2, ypos);
  text("T", xpos+spacex*3, ypos);
  text("O", xpos+spacex*4, ypos);
  //type
  fill(255);
  text("T", xpos, tpos);
  text("Y", xpos+spacex, tpos);
  text("P", xpos+spacex*2, tpos);
  text("E", xpos+spacex*3, tpos);
  //FACE ROW
  fill(faceVal);
  text("F", xpos, epos);
  text("A", xpos+spacex, epos);
  text("C", xpos+spacex*2, epos);
  text("E", xpos+spacex*3, epos);
}

function keyPressed() {
if (keyCode === UP_ARROW) {
      fillVal = 255;
      faceVal = 0;
    } else if (keyCode === DOWN_ARROW) {
      fillVal = 0;
      faceVal = 255;
    }
  }
