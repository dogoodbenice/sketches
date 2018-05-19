var ypos;
var lpos;
var words = ['Hello!',"Sup!","Yo!","Hola!","Hey!","Hallå!","Hallo!","Ciao!","Hej!","Salut!"];
var word;

function setup() {
  createCanvas(1000, 450);
  noStroke();
  rectMode(CENTER);
  frameRate(1);
}

function draw() {
  ypos = 300;
  lpos = 0;
  word = random(words);

  if (mouseY < 100) {
    ypos = 25;
  } else if (mouseY > 100) {
    ypos = 300;
  }
  background(130);
  //shadow
  fill(100);
  rect(500,250,300,150);
  //envelope
  fill(255);
  rect(510,240,300,150);
  //envelope shadow
  fill(180);
  triangle(360,165,510,300,660,165);
  //envelope lip
  fill(220);
  triangle(360,165,510,ypos,660,165);
  // letter
  if (mouseY < 100) {
    lpos = 200;
    fill(255);
    rect(510,200,130,lpos);
    fill(0);
    textSize(40);
    text(word, 460,140);
  } else if (mouseY > 100) {
    lpos = 0;
  }
}
function mousePressed(){
  loop();
}
