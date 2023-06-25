let circleDots = [];
let squareDots = [];
const numDots = 2500;
let circleRadius;
let squareSize;

function setup() {
  createCanvas(600, 600);
  circleRadius = random(100,200);
  squareSize = circleRadius+300;
  strokeWeight(1.5);
  generateCircleDots();
  strokeWeight(3);
  generateSquareDots();
}

function draw() {
  background('#1812D6');
  translate(width / 2, height / 2); // Center the shapes within the canvas

  for (let dot of circleDots) {
    stroke('#FFFFFF');
    rotate(frameCount/250000);
    point(dot.x, dot.y);
  }

  for (let dot of squareDots) {
    stroke('#ABCEE2');
    rotate(frameCount/150000);
    point(dot.x, dot.y);
  }
}

function generateCircleDots() {
  for (let i = 0; i < numDots; i++) {
    let angle = random(0, TWO_PI);
    let radius = sqrt(random()) * circleRadius;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    let dot = createVector(x, y);
    circleDots.push(dot);
  }
}

function generateSquareDots() {
  for (let i = 0; i < numDots; i++) {
    let x = random(-squareSize / 2, squareSize / 2);
    let y = random(-squareSize / 2, squareSize / 2);
    let dot = createVector(x, y);
    squareDots.push(dot);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('dotsondots', 4);
  }
}
