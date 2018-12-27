var photobook;
function preload() {
  photobook = loadAnimation('assets/collage1.png', 'assets/collage14.png');
  }

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noStroke();
  fill(100);
  rect(width/3, height/2, 860, 400);
  //pages
  fill(200);
  rect(width/3, height/2, 850, 390);
  fill(240);
  rect(width/3, height/2, 840, 390);
  fill(255);
  rect(width/3, height/2, 830, 390);
  fill(50);
  rect(width/3, height/2, 4, 400);
  animation(photobook, width/3, height/2);
  fill(50);
  rect(width/3, height/2, 3, 380);
  if (mouseIsPressed) {
    photobook.play();
  } else {
    photobook.stop();
  }
}

function mouseClicked() {
    print('mouseX is' + mouseX);
    print('mouseY is' + mouseY);
}
