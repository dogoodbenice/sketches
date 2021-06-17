var speed;

function setup() {
  createCanvas(500, 500);
  // createLoop({
  //   duration: 6,
  //      gif: {
  //          options: { quality: 30},
  //          fileName: "topgraphy.gif",
  //          download: true,
  //          startLoop: 1,
  //          endLoop: 2
  //      }
  //  })
}

function keyPressed() {
  saveCanvas('movement', 'jpg');
}

function draw() {
  background(30);
  motion();
  //drawGrid();
  //triangle(60, 20, 100, 60, 60, 60);
}

function motion() {
  var space = 40;
  var count = 6;
  speed = 50
  translate(150, 150);
  for (var x = 0; x < count; x++) {
    for (var y = 0; y < count; y++) {
      push();
      translate(x * space, y * space);
      fill(255,200);
      stroke(255,50);
      strokeWeight(3);
      rotate((frameCount / speed + x / 0.02));
      triangle(60, 20, 100, 60, 60, 60);
      pop();
    }
  }
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
