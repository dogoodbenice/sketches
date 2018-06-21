var queenalien;
var queenImg;
var score = 0;
var spr;
var redcoin;
//set coinamount
var coinamount = 16;
function preload() {
  queenImg = loadImage("assets/queen.png");
}
function setup() {
  createCanvas(1000, 450);
  queenalien = createSprite();
  noStroke();
  queenalien.addImage(queenImg,queenImg.width/2,queenImg.height/2);
  for (var i = 0; i < coinamount; i++) {
  spr = createSprite(
  random(width), random(height),
  random(25, 30), random(25, 30));
  spr.shapeColor = color('#FFDC0F');
  spr.onMouseOver = removeAndScore;
  }
  for (var i = 0; i < 3; i++){
  redcoin = createSprite(
    random(width), random(height),
    random(25,30), random(25,30));
  redcoin.shapeColor = color('#F70C0C');
  redcoin.onMouseOver = unlucky;
  }
}
function draw() {
  background(130);
  fill(255);
  queenalien.velocity.x = (mouseX - queenalien.position.x) *0.2;
  queenalien.velocity.y = (mouseY - queenalien.position.y) *0.2;
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < coinamount) {
    text(score, width/2, height/2);
  }
  else if (score == coinamount){
    text("You did it!", width/2, height/2);
    unlucky.remove();
  }
  if (score >= 20){
    text('Oh no!',width/2, height/3);
    text('Try again', width/2, height/2);
  }
  drawSprites();
}
function removeAndScore() {
  score += 1;
  this.remove();
}
function unlucky(){
  score += 20;
  this.remove();
}
