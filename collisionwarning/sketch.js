let cars = [];
let vans = [];
let lorries = [];
var clickcount = 0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noStroke();
}

function mousePressed() {
  var vehicleselct = random(0,100);

  if (vehicleselct < 25) {
    for (var i = 0; i < 1; i++) {
      let v = new van;
      vans.push(v);
    }
  } else if (vehicleselct < 60) {
    for (var i = 0; i < 1; i++) {
      let l = new lorry;
      lorries.push(l);
    }
  } else {
    for (var i = 0; i < 1; i++) {
      let c = new car;
      cars.push(c);
    }
  }
  clickcount = clickcount + 1;
}
function draw() {
  background(255-(clickcount*2));
  noStroke();
  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].show();
    cars[i].smoke();
  }
  for (var i = 0; i < vans.length; i++) {
    vans[i].move();
    vans[i].show();
    vans[i].smoke();
  }
  for (var i = 0; i < lorries.length; i++) {
    lorries[i].move();
    lorries[i].show();
    lorries[i].smoke();
  }
}

class van {
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.width = 50;
    this.height = 10;
    this.size = random(10,15);
    this.speed = random(1,4);
    this.col = color(140,25,255);
    this.wheelcol = color(0);
  }
  move(){
    this.x = this.x + this.speed;
    if (this.x > (window.innerWidth+50)) {
      this.x = -20;
    }
  }
  show(){
    fill(this.col);
    rect(this.x,this.y+1,this.width-20,this.height-20);
    rect(this.x,this.y,this.width,this.height);
    fill(this.wheelcol);
    ellipse(this.x+10,this.y+12,this.size);
    ellipse(this.x+40,this.y+12,this.size);
  }
  smoke(){
    fill(140);
    ellipse(this.x-10,this.y+5,random(1,10));
    ellipse(this.x-15,this.y,random(1,15));
  }
}
class lorry {
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.width = 80;
    this.height = 20;
    this.size = random(10,15);
    this.speed = random(1,2);
    this.col = color(0,25,255);
    this.wheelcol = color(0);
  }
  move(){
    this.x = this.x + this.speed;
    if (this.x > (window.innerWidth+50)) {
      this.x = -20;
    }
  }
  show(){
    fill(this.col);
    rect(this.x,this.y+1,this.width-20,this.height-40);
    rect(this.x,this.y,this.width,this.height);
    fill(this.wheelcol);
    ellipse(this.x+10,this.y+23,this.size);
    ellipse(this.x+70,this.y+23,this.size);
  }
  smoke(){
    fill(140);
    ellipse(this.x-10,this.y+5,random(1,10));
    ellipse(this.x-15,this.y,random(1,15));
  }
}
class car {
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.width = 50;
    this.height = 10;
    this.size = random(10,15);
    this.speed = random(0,5);
    this.col = color(140,140,140);
    this.wheelcol = color(0);
  }
  move(){
    this.x = this.x + this.speed;
    if (this.x > (window.innerWidth+50)) {
      this.x = -20;
    }
  }
  show(){
    fill(this.col);
    rect(this.x+10,this.y,this.width-20,this.height-20);
    rect(this.x,this.y,this.width,this.height);
    fill(this.wheelcol);
    ellipse(this.x+10,this.y+12,this.size);
    ellipse(this.x+40,this.y+12,this.size);
  }
  smoke(){
    fill(140);
    ellipse(this.x-10,this.y+5,random(1,10));
    ellipse(this.x-15,this.y,random(1,15));
  }
}
