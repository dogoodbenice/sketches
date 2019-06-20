var words,ind,wordsshadow;
function preload() {
 words = loadStrings('https://gist.githubusercontent.com/logikblok/a5fa3d17da37b123fce2e6fb6d5c7de3/raw/82abded77c34077e80e64f96d488518ad0bee521/words.txt');
}
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER);
  ind = floor(random(words.length));
  textSize(18);
}

function keyPressed() {
  saveCanvas('myWonderfulwords.png');
}


function draw() {
  background('#FCC9B9');
  var x = (mouseY*.5);
  //card
  rect((width/2),((height/1.5)-x+50),450,100);
  //words
  fill(0);
  text(words[ind], width/2,(height/1.5)-x+50);
  //wordsshadow
  fill(140);
  text(words[ind], (width/2)-1,(height/1.5)-x+50);

  //get new words
  if (x < 95) {
    newword();
  }

  //box
  fill('#bdc3c7');
  rect((width/2)-50,(height/1.5),550,250);
  //rect((width/2)-50,(height/1.5)-110,600,30);
  fill(255);
  rect(width/2,(height/1.5),600,250);

}

function newword() {
  ind = floor(random(words.length));
}
