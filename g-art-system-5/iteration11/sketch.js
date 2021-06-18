var speed;

function setup() {
  createCanvas(500, 500);
  createLoop({
    duration: 7,
       gif: {
           options: { quality: 30},
           fileName: "motion.gif",
           download: true,
           startLoop: 1,
           endLoop: 2
       }
   })
}

// function keyPressed() {
//   saveCanvas('movement', 'jpg');
// }

function draw() {
  background('#000F08');
  motion();
  //drawGrid();
  //triangle(60, 20, 100, 60, 60, 60);
  //ellipse(80,40,10);
  //triangle(100, 20, 100, 60, 60, 20);
}

function motion() {
  var space = 40;
  var count = 5;
  speed = 50
  translate(150, 150);
  for (var x = 0; x < count; x++) {
    for (var y = 0; y < count; y++) {
      push();
      translate(x * space, y * space);
      fill('#8F2D56');
      noStroke();
      rotate((frameCount / speed + (y+x) / 0.00005));
      triangle(60, 20, 100, 60, 60, 60);
      fill("#D81159");
      triangle(100, 20, 100, 60, 60, 20);
      fill('#FBB13C')
      ellipse(80,40,15);
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
