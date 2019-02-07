let words = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  strokeWeight(random(1,5));
}
function mouseDragged() {
  let w = new word (mouseX, mouseY);
  words.push(w);
}
function draw() {
  background(255);
  noStroke();
  for (var i = 0; i < words.length; i++) {
    words[i].fall();
    words[i].show();
  }
}
class word {
  constructor(tempx, tempy) {
    this.x = tempx;
    this.y = tempy;
  }
  fall(){
    this.y = this.y + 10;
  }
  show(){
    stroke(random(0,100),random(100,255),255);
    textSize(random(50,80));
    noFill();
    text('Hello',this.x, this.y);
  }
}
