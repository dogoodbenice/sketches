const canvasWidth = 1380;
const canvasHeight = 550;

let randomGen = getRandomInt() // to get a random whole number for a fun intersection selection
// to get a random whole number for a fun intersection selection
function getRandomInt() {
  return Math.floor(Math.random() * 4);
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(random(10));
  //base grid
  gridPaper();
  //funky intersection grid
  grid();
}

function grid() {
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < height; i += 10) {
    if (randomGen == 0) {
      for (let j = 0; j < canvasWidth; j += (random(1,100))) {
        fill(0);
        ellipse(j, i, 4+(random(1,5)));
        line(i+canvasHeight/2, i, i, i+canvasHeight/2);
      }
    } else if (randomGen == 1) {
      for (let j = 0; j < canvasWidth; j += (random(1,100))) {
        line(canvasWidth, i, 0, i);
        ellipse(j, i, 4+(random(1,10)));
        line(canvasHeight, i, i+2, i);
      }
    } else if (randomGen == 2) {
      for (let j = 0; j < canvasWidth; j += (random(1,100))) {
        fill(0);
        ellipse(j, i, 4+(random(1,5)));
        line(i+10, i, i+canvasWidth/2, i);
      }
    } else {
      for (let j = 0; j < canvasWidth; j += (random(1,50))) {
        ellipse(j, i, 1+(random(1,5)));
      }
    }
  }
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
    saveCanvas('myIntersection', 'jpg');
  }
}


