let planes = [];
var adverttext1,input,planecount;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  input = createInput('Type your advert ✈️');
  planecount = 0;
  stroke(1);
}

function mouseClicked() {
  planecount += 1;
  print(planecount);
  if (planecount < 6) {
    let p = new plane (mouseX, mouseY);
    planes.push(p);
  }
}
function draw() {
  background(153, 204, 255);
  noStroke();
  input.position(20, 110);
  for (var i = 0; i < planes.length; i++) {
    planes[i].move();
    planes[i].show();
    planes[i].advert();
  }
}
class plane {
  constructor(tempx, tempy) {
    this.x = tempx;
    this.y = tempy;
  }
  move(){
    this.x = this.x + 5;
    if (this.x > width + 600) {
      this.x = 0-250;
    }
  }
  show(){
    noStroke();
    //plane
    fill(0);
    rect(this.x,this.y-50,80,100);
    rect(this.x,this.y,300,100);
    //glass
    fill(250);
    rect(this.x+200,this.y,100,50);
    //wing
    fill(100);
    rect(this.x+90,this.y+50,90,10);
    //advert
    stroke(0);
    line(this.x-250,this.y+50,this.x,this.y+50);
    noStroke();
    fill(255);
    rect(this.x-250,this.y,200,100);
  }
  advert(){
    const adverttext = input.value();
    //adverttext
    fill(0);
    noStroke();
    textSize(18);
    text(adverttext,this.x-235, this.y+60);
    fill(140);
    text(adverttext,this.x-235, this.y+61);
  }
}
