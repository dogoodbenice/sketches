let vehicles = [];
let clickcount = 0;
let stopSketch = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function mousePressed() {
  if (!stopSketch) {
    var vehicleselct = random(0, 100);

    if (vehicleselct < 25) {
      let v = new Van(mouseX, mouseY);
      vehicles.push(v);
    } else if (vehicleselct < 60) {
      let l = new Lorry(mouseX, mouseY);
      vehicles.push(l);
    } else {
      let c = new Car(mouseX, mouseY);
      vehicles.push(c);
    }
    clickcount = clickcount + 1;
  }
}

function draw() {
  background(255 - clickcount * 2);
  noStroke();
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].move();
    vehicles[i].show();
    vehicles[i].smoke();
  }

  if (!stopSketch && checkIntersection()) {
    stopSketch = true;
    textSize(32);
    fill(255, 0, 0);
    text("Crash! Sketch stopped.", width / 4, height / 2 - 30);
    noLoop();
  }
}

function checkIntersection() {
  for (let i = 0; i < vehicles.length; i++) {
    for (let j = i + 1; j < vehicles.length; j++) {
      if (vehicles[i].intersects(vehicles[j])) {
        return true;
      }
    }
  }
  return false;
}

class Vehicle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 15);
    this.speed = random(1, 4);
    this.wheelcol = color(0);
  }

  move() {
    this.x = this.x + this.speed;
    if (this.x > window.innerWidth + 50) {
      this.x = -20;
    }
  }

  smoke() {
    fill(140);
    ellipse(this.x - 10, this.y + 5, random(1, 10));
    ellipse(this.x - 15, this.y, random(1, 15));
  }

  intersects(other) {
    // Check if this vehicle intersects with another vehicle
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }
}

class Van extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 10;
    this.col = color(140, 25, 255);
  }

  show() {
    fill(this.col);
    rect(this.x, this.y + 1, this.width - 20, this.height - 20);
    rect(this.x, this.y, this.width, this.height);
    fill(this.wheelcol);
    ellipse(this.x + 10, this.y + 12, this.size);
    ellipse(this.x + 40, this.y + 12, this.size);
  }
}

class Lorry extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 80;
    this.height = 20;
    this.col = color(0, 25, 255);
  }

  show() {
    fill(this.col);
    rect(this.x, this.y + 1, this.width - 20, this.height - 40);
    rect(this.x, this.y, this.width, this.height);
    fill(this.wheelcol);
    ellipse(this.x + 10, this.y + 23, this.size);
    ellipse(this.x + 70, this.y + 23, this.size);
  }
}

class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 10;
    this.col = color(140, 140, 140);
  }

  show() {
    fill(this.col);
    rect(this.x + 10, this.y, this.width - 20, this.height - 20);
    rect(this.x, this.y, this.width, this.height);
    fill(this.wheelcol);
    ellipse(this.x + 10, this.y + 12, this.size);
    ellipse(this.x + 40, this.y + 12, this.size);
  }
}
