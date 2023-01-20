function setup() {
  createCanvas(600, 600);
  noFill();
  noLoop();  // Disable looping, we will draw the patterns only once
}

function draw() {
  // Set the background color to white
  background(27, 40, 74);
  // Set the fill color to a random color
  noFill();
  strokeWeight(4)
  stroke(195, 157, 57)


  // Set the size of each cell in the grid
  let cellSize = width / 10;

  let pattern = int(random(3));

  switch (pattern) {
    case 0:
      // Generate and draw the unique patterns in each cell of the grid
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          //left triangle
          triangle(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1,
            cellSize * (i + 0.1), cellSize * j + cellSize * 0.9,
            cellSize * (i + 1) - cellSize * 0.5, cellSize * j + cellSize * 0.9);
          //centre triangle
          triangle(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.9,
            cellSize * (i + 0.5), cellSize * j + cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.1, cellSize * j + cellSize * 0.9);
          //right triangle
          triangle(cellSize * i + cellSize * 0.5, cellSize * j + cellSize * 0.9,
            cellSize * (i + 0.9), cellSize * j + cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.1, cellSize * j + cellSize * 0.9);


          // rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.5);
          // rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.3, cellSize * 0.5);
          // rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.3, cellSize * 0.5);
          // rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.1, cellSize * 0.5);


          //     line(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1,
          //       cellSize * (i + 1) - cellSize * 0.1, cellSize * (j + 1) - cellSize * 0.1);
          //  line(cellSize * i + cellSize * 0.1, cellSize * (j + 1) - cellSize * 0.1,
          //       cellSize * (i + 1) - cellSize * 0.1, cellSize * j + cellSize * 0.1);

        }
      }
      break;
    case 1:
      break;
    case 2:
      break;
  }

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('stampset', 'jpg');
  }
}