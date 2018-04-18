var x = 300;
var y = 300;

function setup() {
createCanvas(1000,450);
noStroke();
background(0);
}

function draw() {
  //experiment with the fill values
  fill(random(120+x), x+y+x, 255*x);
  //experiment with the values adding to the x and y variables
  rect(2+x, 2+y, 1+x, y);
  //little logic
  if (mouseY > 300) {
    y--;
  }
  if (mouseY < 300) {
    y++;
  }
  if (mouseX > 300) {
    x--;
  } 
  if (mouseX < 300) {
    x++;
  }
  if (x > 600) {
    x = 0;
  }
  if (y > 600) {
    y = 0;
  }
}

function keyPressed() {
background(0);
}
