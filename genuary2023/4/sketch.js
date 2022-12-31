const canvasWidth = 1380;
const canvasHeight = 550;

let randomGen = getRandomInt() // to get a random non whole number for fun spin

function getRandomInt() {
  return Math.floor(Math.random() * 4);
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(25);
  //base grid
  gridPaper();
  //funky grid
  grid();
}

function grid() {
  stroke(255);
  strokeWeight(2);
  //Mini grid inside
  for (let i = 0; i < height; i += 10) {
    if (randomGen == 0) {
      line(100, canvasHeight, canvasWidth, i);
      line(100, i, i, i);
    } else if (randomGen == 1) {
      line(0, i, canvasHeight, 0);
      line(200, canvasHeight, i, 0);
    } else if (randomGen == 2) {
      line(100, i, i, canvasHeight);
    } else if (randomGen == 3) {
      line(100, canvasHeight, canvasWidth, i);
      line(100, i, i, i);
    } else {
      line(i, i, i, canvasHeight);
      line(100, canvasHeight, canvasWidth, i);
    }

  }
  console.log(randomGen)
}

function mouseClicked() {
  setup();
}

function gridPaper() {
  stroke(255);
  strokeWeight(2);
  // draw horizontal lines
  for (let i = 0; i < height; i += 20) {
    line(0, i, width, i);
  }
  // draw vertical lines
  for (let i = 0; i < width; i += 20) {
    line(i, 0, i, height);
  }
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('myglitchsketch', 'jpg');
  }
}


