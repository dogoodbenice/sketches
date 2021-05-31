function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER)
  shape();
  drawGrid();
}

function mousePressed() {
  shape();
  //drawGrid();
  console.log(mouseX);
  console.log(mouseY);
}

// function keyPressed() {
//   saveCanvas('flagrid', 'jpg');
// }

function shape() {
  background(0);

  push()
  //strokeWeight(500)
  fill(255)
  let x1 = 140
  let y1 = 900
  let x2 = 520
  let y2 = 120
  let x3 = 900
  let y3 = 900
  triangle(x1, y1, x2, y2, x3, y3);
  pop()
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=50) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=50) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
