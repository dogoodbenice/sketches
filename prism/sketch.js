var colorchange, fillcolor;
function setup() {
  createCanvas(1200,450);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorchange = false;
}
function draw() {
  background(0);
  var tpos = 500;
  var typos = 250;
  if (mouseIsPressed) {
    colorchange = true;
  } else {
    colorchange = false;
  }
  if (colorchange == true) {
    fillcolor = 0;
  } else {
    fillcolor = 255;
  }
  push();
  stroke(fillcolor,fillcolor,fillcolor);
  strokeWeight(20);
  line(mouseX,mouseY,tpos+100,typos-30);
  strokeWeight(15);
  //red
  push();
  if (colorchange == true) {
    redcolor1 = 0;
    redcolor2 = 0;
    redcolor3 = 0;
  } else {
    redcolor1 = 255;
    redcolor2 = 0;
    redcolor3 = 0;
  }
  stroke(redcolor1,redcolor2,redcolor3);
  line(tpos+100,typos-30,(width-mouseX)-60,(height-mouseY)-60);
  pop();
  //orange
  push();
  if (colorchange == true) {
    orangecolor1 = 0;
    orangecolor2 = 0;
    orangecolor3 = 0;
  } else {
    orangecolor1 = 255;
    orangecolor2 = 188;
    orangecolor3 = 3;
  }
  stroke(orangecolor1,orangecolor2,orangecolor3);
  line(tpos+100,typos-30,(width-mouseX)-40,(height-mouseY)-40);
  pop();
  //yellow
  push();
  if (colorchange == true) {
    yellowcolor1 = 0;
    yellowcolor2 = 0;
    yellowcolor3 = 0;
  } else {
    yellowcolor1 = 255;
    yellowcolor2 = 243;
    yellowcolor3 = 3;
  }
  stroke(yellowcolor1,yellowcolor2,yellowcolor3);
  line(tpos+100,typos-30,(width-mouseX)-20,(height-mouseY)-20);
  pop();
  //green
  push();
  if (colorchange == true) {
    greencolor1 = 0;
    greencolor2 = 0;
    greencolor3 = 0;
  } else {
    greencolor1 = 14;
    greencolor2 = 255;
    greencolor3 = 3;
  }
  stroke(greencolor1,greencolor2,greencolor3);
  line(tpos+100,typos-30,(width-mouseX)-0,(height-mouseY)-0);
  pop();
  //blue
  push();
  if (colorchange == true) {
    bluecolor1 = 0;
    bluecolor2 = 0;
    bluecolor3 = 0;
  } else {
    bluecolor1 = 3;
    bluecolor2 = 71;
    bluecolor3 = 255;
  }
  stroke(bluecolor1,bluecolor2,bluecolor3);
  line(tpos+100,typos-30,(width-mouseX)+20,(height-mouseY)+20);
  pop();
  //indigo
  push();
  if (colorchange == true) {
    indigocolor1 = 0;
    indigocolor2 = 0;
    indigocolor3 = 0;
  } else {
    indigocolor1 = 52;
    indigocolor2 = 3;
    indigocolor3 = 255;
  }
  stroke(indigocolor1,indigocolor2,indigocolor3);
  line(tpos+100,typos-30,(width-mouseX)+40,(height-mouseY)+40);
  pop();
  //violet
  push();
  if (colorchange == true) {
    violetcolor1 = 0;
    violetcolor2 = 0;
    violetcolor3 = 0;
  } else {
    violetcolor1 = 128;
    violetcolor2 = 3;
    violetcolor3 = 255;
  }
  stroke(violetcolor1,violetcolor2,violetcolor3);
  line(tpos+100,typos-30,(width-mouseX)+60,(height-mouseY)+60);
  pop();
  //line(0,0,1200,450);
  //line(0,450,1200,0);
  fill(fillcolor);
  ellipse(mouseX,mouseY,50,50);
  pop();
  //PRISM
  push();
  fill(0);
  text("LIGHT",mouseX-15,mouseY+5);
  stroke(255,255,255);
  triangle(tpos,typos,tpos+100,typos-100,tpos+200,typos);
  pop();
  if (colorchange == true) {
    fill(255);
    text("DARK",tpos+80,typos-30);
  } else {
    fill(0);
    text("DARK",tpos+80,typos-30);
  }
}
