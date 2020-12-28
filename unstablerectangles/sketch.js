let gridscale = 80;
let unstables = [];
// Number of columns and rows in our system
let colorval, cols, rows;
let fr = 10;

function setup() {
  createCanvas(640, 480);
  // Initialize columns and rows
  cols = width / gridscale;
  rows = height / gridscale;
  frameRate(fr)
  colorval = 255;
  for (let i = 0; i < gridscale; i++) {
    unstables.push(new unstablerects());
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      // Scaling up to draw a rectangle at (x,y)
      var x = i * gridscale;
      var y = j * gridscale;
      stroke(10);
      rect(x, y, gridscale, gridscale);
      for (let i = 0; i < unstables.length; i++) {
        fill(colorval,colorval,colorval);
        stroke(random(0,255));
        unstables[i].move();
        unstables[i].display();
      }
    }
  }
}

function mouseClicked() {
  colorval = random(100,255);
  console.log(colorval);
}

class unstablerects {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  display() {
    rect(this.x, this.y, this.diameter, this.diameter);
  }
}
