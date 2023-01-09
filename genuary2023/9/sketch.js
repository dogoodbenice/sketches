let img1, img2, img3, img4;

function preload() {
  let randomNum1 = int(random(13));
  let randomNum2 = int(random(13));
  let randomNum3 = int(random(13));
  let randomNum4 = int(random(13));
  let randomNum5 = int(random(13));
  img1 = loadImage(`assets/${randomNum1}.png`);
  img2 = loadImage(`assets/${randomNum2}.png`);
  img3 = loadImage(`assets/${randomNum3}.png`);
  img4 = loadImage(`assets/${randomNum4}.png`);
  img5 = loadImage(`assets/${randomNum5}.png`);
}

function setup() {
  createCanvas(800, 800);
  background(255);
  let cellNum = 8
  // Set the size of each cell in the grid
  let cellSize = width / cellNum;
  // Draw the grid
  stroke(240);
  for (let x = 0; x < width; x += cellSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += cellSize) {
    line(0, y, width, y);
  }
  // Add the unique leaves into the grid
  for (let i = 0; i < cellNum; i++) {
    for (let j = 0; j < cellNum; j++) {
      // Set the fill color to a random color per shape
      fill(random(255), random(255), random(255));
      let pattern = int(random(5));
      switch (pattern) {
        case 0:
          ellipse(cellSize * (i + 0.5), cellSize * (j + 0.5), cellSize * 0.8, cellSize * 0.8);
          image(img1, cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          break;
        case 1:
          // Draw a square with an image
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          image(img2, cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          break;
        case 2:
          triangle(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.9,
            cellSize * (i + 0.5), cellSize * j + cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.1, cellSize * j + cellSize * 0.9);
          image(img3, cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          break;
        case 3:
          image(img4, cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          break;
        case 4:
          ellipse(cellSize * (i + 0.5), cellSize * (j + 0.5), cellSize * 0.8, cellSize * 0.8);  
          image(img5, cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);
          break;
      }
    }
  }
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('plantsgloriousplants', 'jpg');
  }
}

