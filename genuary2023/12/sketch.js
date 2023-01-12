function setup() {
  w = 650
  createCanvas(w, w)
  gridWidth = w
  gridHeight = w
  hexagonSize = w / random(15, 20)

  let pattern = int(random(3));
  
  switch (pattern) {
    case 0:
      background(250);
      stroke(20);
      strokeWeight(1)
      hexagonSize = w / random(15, 20)
      break;
    case 1:
      background(0);
      stroke(20);
      strokeWeight(5)
      hexagonSize = w / random(15, 20)
      break;
    case 2:
      background(100);
      stroke(50);
      strokeWeight(3)
      hexagonSize = w / random(15, 20)
      break;
  }
  noFill();
  makeGrid()
  noLoop()
}

function drawHexagon(cX, cY, r) {
  beginShape()
  for (let a = 0; a < TAU; a += TAU / 9) {
    vertex(cX + r * cos(a), cY + r * sin(a))
  }
  endShape(CLOSE)
}

function makeGrid() {
  count = 0
  for (y = 0; y < gridHeight; y += hexagonSize / 2.3) {
    for (x = 0; x < gridWidth; x += hexagonSize * 1.5) {
      drawHexagon(x + hexagonSize * (count % 2 == 0) * 0.75, y, hexagonSize / 2)
    }
    count++
  }
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('myTesselation', 'jpg');
  }
}