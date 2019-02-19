let planets = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  for (var i = 0; i < 100; i++) {
    let w = new planet;
    planets.push(w);
  }
}

function mousePressed() {
  for (var i = 0; i < planets.length; i++) {
    planets[i].clicked();
  }
}

function draw() {
  background(255);
  noStroke();
  for (var i = 0; i < planets.length; i++) {
    fill(random(0,20),255,20);
    planets[i].move();
    planets[i].show();
  }
}
class planet {
  constructor(tempX) {
    this.inside = color(random(0,255), random(0,204), 255);
    this.x = random(0,window.innerWidth);
    this.y = random(0,window.innerHeight);
    this.size = random(10,100);
    this.speed = random(0,5);
  }
  move(){
    this.x = this.x + this.speed;
    if (this.x > (window.innerWidth+50)) {
      this.x = -20;
    }
  }
  clicked(){
    this.inside = color(random(0,255), random(0,204), 255);
  }
  show(){
    fill(this.inside);
    ellipse(this.x,this.y,this.size);
  }
}
