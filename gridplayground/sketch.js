function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke()

  // create a grid of shapes and colors
  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      // choose a random fill color
      fill(random(255), random(255), random(255));

      // choose a random shape
      if (random(1) < 0.3) {
        // draw a circle
        ellipse(x + 25, y + 25, 25);
      } else if (random(1) < 0.4)  {
        // draw a square
        rect(x, y, 50, 50);
      } else {
        triangle(x, y, x + 25, y + 50, x + 50, y);
      }
    }
  }
}

