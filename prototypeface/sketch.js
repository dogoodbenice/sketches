var xpos; 
var ypos; 
var spacex;
var tpos;
var fillVal;
var faceVal;
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
  var vpos = ypos*5;
  var wpos = ypos*6;
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
  //Second row because we can 
  //fill(fillVal);
 //text("P", xpos, upos);
 // text("R", xpos+spacex, upos);
//  text("O", xpos+spacex*2, upos);
 // text("T", xpos+spacex*3, upos);
 // text("O", xpos+spacex*4, upos);
  //type
//  fill(255);
 // text("T", xpos, vpos);
//  text("Y", xpos+spacex, vpos);
 // text("P", xpos+spacex*2, vpos);
 // text("E", xpos+spacex*3, vpos);
  //FACE ROW
//  fill(faceVal);
//  text("F", xpos, wpos);
 // text("A", xpos+spacex, wpos);
//  text("C", xpos+spacex*2, wpos);
//  text("E", xpos+spacex*3, wpos);
}

function keyPressed() {
  if (key == CODED) {
    if (keyCode === 38) {
      fillVal = 255;
      faceVal = 0;
    } else if (keyCode === 40) {
      fillVal = 0;
      faceVal = 255;
    }
  } else {
    fillVal = 0;
  }
  return false; // prevent any default behaviour
}
