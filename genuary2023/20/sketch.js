function setup() {
  createCanvas(600, 600);
  noLoop();  
}

function draw() {
  // Set the background color to white
  background(27, 40, 74);
  noFill();
  strokeWeight(4)
  stroke(195, 157, 57)

  let numsize = 9
  let cellSize = width / numsize;
  let pattern = int(random(4));
  switch (pattern) {
    case 0:
      // Generate and draw the unique patterns in each cell of the grid
      for (let i = 0; i < numsize; i++) {
        for (let j = 0; j < numsize; j++) {
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
        }
      }
      break;
    case 1:
      for (let i = 0; i < numsize; i++) {
        for (let j = 0; j < numsize; j++) {
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.5);
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.3, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.3, cellSize * 0.5);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.1, cellSize * 0.6);
        }
      }
      break;
    case 2:
      for (let i = 0; i < numsize; i++) {
        for (let j = 0; j < numsize; j++) {
          //left
          line(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.1, cellSize * (j + 1) - cellSize * 0.1);
          //middle vertical
          line(cellSize * i + cellSize * 0.5, cellSize * j + cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.5, cellSize * (j + 1) - cellSize * 0.1);
          //middle horizontal
          line(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.5,
            cellSize * (i + 1) - cellSize * 0.5, cellSize * (j + 1) - cellSize * 0.5);
          //right  
          line(cellSize * i + cellSize * 0.1, cellSize * (j + 1) - cellSize * 0.1,
            cellSize * (i + 1) - cellSize * 0.1, cellSize * j + cellSize * 0.1);
        }
      }
      break;
    case 3:
      for (let i = 0; i < numsize; i++) {
        for (let j = 0; j < numsize; j++) {
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.3, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.3, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.1, cellSize * 0.6);
        }
      }
      break;
    case 4:
      for (let i = 0; i < numsize; i++) {
        for (let j = 0; j < numsize; j++) {
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.1, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.1, cellSize * j + cellSize * 0.3, cellSize * 0.5);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.3, cellSize * 0.6);
          rect(cellSize * i + cellSize * 0.3, cellSize * j + cellSize * 0.1, cellSize * 0.5);
        }
      }
      break;
  }

  fill(27, 40, 74);
  noStroke();
  quad(300 - 200, 300, 300, 300 - 200, 300 + 200, 300, 300, 300 + 200);
  fill(195, 157, 57);
  textSize(50);
  textFont('Georgia');
  textAlign(CENTER);
  switch (pattern) {
    case 0:
      text(`C'est la vie`, width / 2, 320);
      break;
    case 1:
      text('Joie de vivre', width / 2, 320);
      break;
    case 2:
      text('Au contraire!', width / 2, 320);
      break;
    case 3:
      text('Ça ne fait rien', width / 2, 320);
      break;
    case 4:
      text('Noblesse oblige', width / 2, 320);
      break;
  }
  noFill();
  strokeWeight(20);

  switch (pattern) {
    case 0:
      stroke(195, 157, 57)
      rect(0, 0, 600);
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      stroke(27, 40, 74)
      rect(0,0,600);
      break;
    case 4:
      break;
  }


}

function keyPressed() {
  if (key === 's') {
    saveCanvas('ardecopattern', 'jpg');
  }
}