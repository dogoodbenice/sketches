var ypos;

function setup() {
  createCanvas(600,400);
}

function draw() {
  var ypos = 185;
  background(0);
  fill(mouseX,mouseY,mouseX-mouseY);
  textSize(180);
  text("Hello",width/8,ypos);
  fill(mouseY,mouseX,mouseY-mouseX);
  text("World",width/8,ypos+ypos); 
}
