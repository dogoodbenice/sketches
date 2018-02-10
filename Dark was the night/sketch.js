function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  fill(255, 242, 124);
  ellipse(mouseX, 120, 100, 100);
  filter(BLUR, 3);
  fill(255, 255, 0);
  ellipse(mouseX, 120, 90, 90);
  fill(4, 33, 3);

  for (var x = 0; x < width; x += 50) {
    for (var y =0; y <= height; y += random(10,100))
    triangle(x, 600, (x / 2)+x, 300+y, x + 50, 600);
  }

}
