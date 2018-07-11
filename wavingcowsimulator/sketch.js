var callx = 600;

function setup() {
  createCanvas(1200,500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}
function cow(){
  //udder
  fill(255,137,133);
  arc(500, 320, 100, 100, HALF_PI, PI);
  //shadow
  fill(110,40);
  rect(545, 440, 250, 85, 20);
  //leg 2-4
  fill(255);
  rect(500, 340, 20, 180, 15);
  rect(460, 340, 20, 180, 15);
  fill(255);
  rect(630, 340, 20, 180, 15);
  //body
  fill(255);
  rect(560, 280, 220, 140, 20);
  fill(0);
  rect(500,320,50,20,20);
  rect(507,300,80,40,15);
  rect(570,240,60,40,40);
  rect(600,230,40,20,90);
  //tail
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  beginShape();
  vertex(460, 220);
  bezierVertex(400, 220, 460, 300, 400, 300);
  endShape();
  pop();
  //headshadow
  fill(240);
  rect(660, 245, 70, 80, 20);
  //head
  fill(255);
  rect(670,240,70,100,20);
  fill(0);
  rect(650,230,10,10,20);
  rect(690,230,10,10,20);
  //ears
  fill(255);
  rect(640,200,55,20,20);
  rect(700,200,55,20,20);
  fill(240);
  rect(640,200,30,20,20);
  rect(700,200,30,20,20);
  //nose
  fill(255,137,133);
  rect(670,280,50,30,20);
  fill(200,115,110);
  rect(660,280,10,10,20);
  rect(680,280,10,10,20);
}

function sky(){
  fill(15,146,250);
  rect(width/2,height/4,width,500);
}

function cloud(){
  fill(240);
  var cpos = 0;
  var cpos2 = 0;
  cpos += 1;
  rect(cpos, cpos2, 100, 50, 15);
  fill(255);
  rect(630, 340, 20, 180, 15);
}

//draw a vehicle and play
function draw() {
  background(5,255,130);
  sky();
  //cloud();
  cow();
  //leg movement restrictions / control
  push();
  posX = mouseX;
  posY = mouseY;
  if(posX > 780){
    posX = 770;
  } else if (posX < 550) {
    posX = 560;
  }
  if(posY > 420){
    posY = 420;
  } else if (posY < 175) {
    posY = 175;
  }
  stroke(240);
  strokeWeight(20);
  line(660, 330, posX, posY);
  pop();
  //Moooooooooooooooooooooooooooooooooooo
  fill(255);
  strokeWeight(20);
  textSize(30);
  textStyle(BOLD);
  for (var i = 0; i < 3; i++) {
    callx = callx - i;
  }
  if (callx <= -800) {
    callx = 1200;
  }
  text('Moooooooooooooooooooooooooooooooooooo', callx, 90);
  print(callx);
}
