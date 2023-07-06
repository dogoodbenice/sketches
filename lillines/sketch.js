const gridSize = 55;
const numLines = 5;
const lineLength = 3;

function setup() {
  createCanvas(600, 600);
  background(10);
  stroke(255);
  drawWhiteLines();
}

function drawWhiteLines() {
  strokeWeight(5);
  for (let x = gridSize; x <= width - gridSize/20; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize/20; y += gridSize) {
      for (let i = 0; i < numLines; i++) {
        let startX = x - lineLength * 3;
        let startY = y - gridSize / 2 + (gridSize / (numLines + 1)) * (i + 1);
        let lineLengthVariation = random(-20, 20);
        let endX = x + lineLength / 2 + lineLengthVariation;
        let endY = startY;
        //line(startY, startX, endX, endY);
        line(startY, startX, endY, endX);
        //line(startX, startY, endX, endY);
        //line(startX, startY, endX, endY);
      }
    }
  }
}

function keyPressed() {
  if (key === 's') {
    save('lillines.jpg');
  }
}
