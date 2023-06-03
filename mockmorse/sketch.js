const gridSize = 15; // Number of rows and columns in the grid
const gridWidth = 650; // Width of the grid
const gridHeight = 600; // Height of the grid

function setup() {
  createCanvas(gridWidth, gridHeight);
  background(0);
  const cellWidth = gridWidth / gridSize;
  const cellHeight = gridHeight / gridSize;

  // Loop through each grid cell
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cellX = col * cellWidth;
      const cellY = row * cellHeight;

      // Draw random lines in each cell
      drawStrip(cellX, cellY, cellWidth, cellHeight);
    }
  }
}

function drawStrip(x, y, width, height) {
  const numLines = random(25); 
  const lineSpacing = width / numLines;


  for (let i = 0; i < numLines; i++) {
    const lineX = x + i * lineSpacing;
    const lineY = y + height / 5;

    push();
    translate(lineX, lineY);
    const lineLength = lineSpacing * 0.8;
    const lineOffset = lineSpacing * 0.4;
    
    if (numLines >= 4){
      stroke(255)
      line(-lineLength / 2, -lineOffset, lineLength / 2, lineOffset);  
    } else if (numLines >= 6) {
      ellipse(-lineLength / 2, -lineLength, lineLength / 3);  
      ellipse(-lineLength / 2, lineLength, lineLength / 3);  
    } else if (numLines >= 8) {
      strokeWeight(10)
      rotate(numLines * 0.001); // Rotate the lines over time
      line(lineLength / 2, lineOffset, lineLength, lineOffset/3); 
    } else 
      ellipse(lineLength / 2, lineLength, lineOffset/3); 
    
    pop();
  }
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('mockmorse', 'jpg');
  }
}