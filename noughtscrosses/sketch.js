var noughtsprite;
var crosssprite;
var noughtIMG;
var crosses;

function preload(){
  noughtIMG = loadImage("assets/noughts.png");
  crossIMG = loadImage("assets/cross.png")
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  crosses = new Group ();
  for (var i = 0; i < 20; i++) {
    crosssprite = createSprite(random(window.innerWidth),random(window.innerHeight));
    crosssprite.addImage(crossIMG,crossIMG.width/2,crossIMG.height/2);
    crosses.add(crosssprite);
  }
  noughtsprite = createSprite();
  noughtsprite.addImage(noughtIMG,noughtIMG.width/2,noughtIMG.height/2);
}
function draw() {
  background(0);
  noughtsprite.displace(crosses);
  drawSprites();
}

function mousePressed(){
  noughtsprite.position.x = mouseX;
  noughtsprite.position.y = mouseY;
  noughtsprite.velocity.x = random(-5, 5);
  noughtsprite.velocity.y = random(-5, 5);
}
