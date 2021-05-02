let w = 500;
let h = 500;
let angle = 0;

class Raindrop{
  constructor(){
    this.xPos = Math.random() * w
    this.yPos = Math.random() * h
    this.speed = Math.random() * 2
    this.r = Math.random() * 255
    this.g = Math.random() * 255
    this.b = Math.random() * 255
    this.size = Math.random() * 20 + 1
    this.z = Math.random() * 50 + 1
  }

  display(){
    fill(this.r, this.g, this.b)
    ellipse(this.xPos, this.yPos, this.z, this.z)
  }

  move(){
    this.yPos += this.z/20
    if (this.yPos >= height){
      this.yPos = 0
    }
  }

}


let raindropList = []
let num_raindrops = 10;


function setup() {
  createCanvas(w, h)
  //background(0, 100, 200)
  noStroke()
  for(let i = 0; i < num_raindrops; i++){
    raindropList.push(new Raindrop())
  }
}

function draw() {
  background(0, 100, 200)
  angle += 0.02;
  translate(width / 2, height / 2);
  for(let i = 0; i < num_raindrops; i++){
    rotate(angle);
    raindropList[i].display()
    //raindropList[i].move()
  }
}
