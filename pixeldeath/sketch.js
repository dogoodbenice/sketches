let grid = [];
const CELL_SIZE = 10;
let gridWidth;
let gridHeight;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Define our color palette
  colors = [
    color("#e74c3c"),    // Red
    color("#e67e22"),    // Orange
    color("#27ae60"),    // Green
    color("#ffffff")    // White
  ];
  
  initializeGrid();
}

function initializeGrid() {
  // Calculate grid dimensions based on window size
  gridWidth = ceil(width / CELL_SIZE);
  gridHeight = ceil(height / CELL_SIZE);
  
  // Initialize the grid with random colors from our palette
  for (let i = 0; i < gridWidth; i++) {
    grid[i] = [];
    for (let j = 0; j < gridHeight; j++) {
      grid[i][j] = random(colors);
    }
  }
}

function draw() {
  // Draw the grid
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      fill(grid[i][j]);
      rect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

function mousePressed() {
  initializeGrid();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializeGrid();
}
