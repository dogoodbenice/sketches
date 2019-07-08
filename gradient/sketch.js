var rectw,grsize;
var from1,from2,from3;
var to1, to2, to3;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rectw =  windowWidth / 18;
  from1 = 10,
  from2 = 255;
  from3 = 10;
  to1 = 20;
  to2 = 60;
  to3 = 255;
 }

function draw() {
  background(255,255,255);
  noStroke();
  textSize(grsize);
  let from = color(from1, from2, from3);
  let to = color(to1, to2, to3);

  if (mouseIsPressed) {
    from1 = random(0,255);
    from2 = random(0,255);
    from3 = random(0,255);
    to1 = random(0,255);
    to2 = random(0,255);
    to3 = random(0,255);
    print(from);
    print(to);
  }

  colorMode(RGB);
  let inter1 = lerpColor(from, to, 0.05);
  let inter2 = lerpColor(from, to, 0.10);
  let inter3 = lerpColor(from, to, 0.15);
  let inter4 = lerpColor(from, to, 0.20);
  let inter5 = lerpColor(from, to, 0.25);
  let inter6 = lerpColor(from, to, 0.30);
  let inter7 = lerpColor(from, to, 0.35);
  let inter8 = lerpColor(from, to, 0.40);
  let inter9 = lerpColor(from, to, 0.45);
  let inter10 = lerpColor(from, to, 0.50);
  let inter11 = lerpColor(from, to, 0.55);
  let inter12 = lerpColor(from, to, 0.60);
  let inter13 = lerpColor(from, to, 0.65);
  let inter14 = lerpColor(from, to, 0.70);
  let inter15 = lerpColor(from, to, 0.80);
  let inter16 = lerpColor(from, to, 0.85);
  let inter17 = lerpColor(from, to, 0.90);
  let inter18 = lerpColor(from, to, 0.95);
  fill(from);
  rect(0, 0, rectw, windowHeight);
  fill(inter1);
  rect(rectw, 0, rectw, windowHeight);
  fill(inter2);
  rect(rectw*2, 0, rectw, windowHeight);
  fill(inter3);
  rect(rectw*3, 0, rectw, windowHeight);
  fill(inter4);
  rect(rectw*4, 0, rectw, windowHeight);
  fill(inter5);
  rect(rectw*5, 0, rectw, windowHeight);
  fill(inter6);
  rect(rectw*6, 0, rectw, windowHeight);
  fill(inter7);
  rect(rectw*7, 0, rectw, windowHeight);
  fill(inter8);
  rect(rectw*8, 0, rectw, windowHeight);
  fill(inter9);
  rect(rectw*9, 0, rectw, windowHeight);
  fill(inter10);
  rect(rectw*10, 0, rectw, windowHeight);
  fill(inter11);
  rect(rectw*11, 0, rectw, windowHeight);
  fill(inter12);
  rect(rectw*12, 0, rectw, windowHeight);
  fill(inter13);
  rect(rectw*13, 0, rectw, windowHeight);
  fill(inter14);
  rect(rectw*14, 0, rectw, windowHeight);
  fill(inter15);
  rect(rectw*15, 0, rectw, windowHeight);
  fill(inter16);
  rect(rectw*16, 0, rectw, windowHeight);
  fill(inter17);
  rect(rectw*17, 0, rectw, windowHeight);
  fill(to);
  rect(rectw*18, 0, rectw, windowHeight);
}

function keyPressed() {
  saveCanvas('myGradient.png');
}
