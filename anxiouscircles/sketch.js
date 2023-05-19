let angle;
const sSize = 40;
const sOffset = 20;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noStroke();
}

function draw() {
  background(0);
  angle = (mouseX/mouseY)/5.5

  for (let x = 0; x < width; x += sSize + sOffset) {
    for (let y = 0; y < height; y += sSize + sOffset) {
      const dimension = sSize + sin(angle) * random(5, 20);
      const hue = map(dimension, sSize, sSize + 20, 0, 255);
      fill(hue, 150, 200);
      ellipse(x, y, dimension, dimension);
      ellipse(x + 10, y + 10, dimension, dimension);
    }
  }

  angle += 0.05;
}
