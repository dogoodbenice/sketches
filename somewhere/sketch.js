var letters = ["S","O","M","E","W","H","E","R","E"];

function setup() {
  createCanvas(1000, 450);
  noStroke();
  fill(0);
  textSize(40);
  frameRate(8);
}

function draw() {
  var botypos = 450;
  background(60,70,255);
  //value checking
  //Main Mountain
  fill(130);
  triangle(330, botypos,470, 190, 510, botypos);
  fill(180);
  triangle(510,botypos,470,190,640,botypos);
  //Sub Mountain1
  fill(180);
  triangle(290,botypos,102,316,187,botypos);
  fill(130);
  triangle(40,botypos,102,316,187,botypos);
  //Sub Mountain2
  fill(130);
  triangle(900,botypos,900,300,700,botypos);
  fill(180);
  triangle(900,botypos,900,300,950,botypos);
  //somewhere text
  fill(255);
  if (mouseX < 400) {
     text(letters[0],300,200+(random(0.01,3)));
   } else if (mouseX > 100) {
     text(letters[0],460,000);
 }
 if (mouseX < 450) {
    text(letters[1],350,220+(random(0.01,3)));
  } else if (mouseX > 100) {
    text(letters[1],460,000);
}
if (mouseX < 500) {
   text(letters[2],400,210+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[2],460,000);
}
if (mouseX < 650) {
   text(letters[3],450,175+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[3],460,000);
}
if (mouseX < 700) {
   text(letters[4],500,195+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[4],460,000);
}
if (mouseX < 750) {
   text(letters[5],550,210+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[5],460,000);
}
if (mouseX < 800) {
   text(letters[6],600,200+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[6],460,000);
}
if (mouseX < 850) {
   text(letters[7],650,220+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[7],460,000);
}
if (mouseX < 880) {
   text(letters[8],700,210+(random(0.01,3)));
 } else if (mouseX > 100) {
   text(letters[8],460,000);
}
}
