
function setup() {
  createCanvas(600, 600);
  xoff = 0;
  yoff = 50;
  rectMode(CENTER)
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  rect(width / 2, height / 2, 600)
  gradient()
}

function gradient() {

  
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  rect(width / 2, height / 2, 400)
  stroke(1)
  for (x = 0; x < (width); x++) {
    for (y = 0; y < height - yoff; y++) {
      var n = noise(x * 0.02, y * 0.02);
      if (random(1) > 0.9 - 0.01 * 1 - n / 10) {
        strokeWeight(
          random(
            0.2 + y / 500 - n / 10,
            0.3 + y / 100 - n / 10 - 1 / 5
          )
        );
        point(x + 1 * (width - yoff * 2) / width + random(-2, 2), yoff+y+random(-6, 100));
      }
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('rug', 'jpg');
  }
}