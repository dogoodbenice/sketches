var words = ["It's",'nice','to','be','nice.'];
var xpos = 450;
var ypos = 100;
var value = 0;

//setup the canvas and text
function setup() {
  createCanvas(1000, 450);
  noStroke();
  fill(0);
  textSize(32);
  background(120,1200,255);
  fill(255);
  for (var i = 0; i < 5; i++) {
  text(words[i],xpos,ypos+[i]*40);
  }
}

//referesh function
function mouseClicked() {
  background(random(100,200),random(100,200),255);
  fill(255);
  for (var i = 0; i < 5; i++) {
  text(words[i],xpos,ypos+[i]*40);
  }
}

//draw niceness everywhere
function draw() {
  if(value === 0){
    fill(random(0,200),random(0,200),255);
    text(words[1],mouseX,mouseY);
  }
}
