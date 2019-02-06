let flies = [];
let pizza;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rectMode(CENTER);
  pizza = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f4/Pizza.png');
}
function mousePressed() {
  let f = new fly (mouseX, mouseY, 5);
  flies.push(f);
}

function draw() {
  background(255);
  noStroke();
  image(pizza, width/2, height/2, pizza.width/4, pizza.height/4);
  for (var i = 0; i < flies.length; i++) {
    flies[i].move();
    flies[i].show();
  }
}
class fly {
  constructor(tempx, tempy, tempw) {
    this.x = tempx;
    this.y = tempy;
    this.w = tempw;
  }
  move(){
    this.x = this.x + random(-10,10);
    this.y = this.y + random(-10,10);
  }
  show(){
    stroke(0);
    strokeWeight(5);
    noFill();
    rect(this.x, this.y,this.w*2,this.w*2);
  }
}
