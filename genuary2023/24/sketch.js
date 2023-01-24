
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  rect(width / 2, height / 2, 600)
  textile()
}

function textile() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  rect(width / 2, height / 2, 500)
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  ellipse(width / 2, height / 2, 300)
  stroke(random(1,80))
  for (x = 0; x < (width); x++) {
    for (y = 0; y < (height); y++) {
      let n = noise(x * 2, y * 2);
      if (random(1) > 0.9 - (random(0.001,0.5)) * 1-n /10) {
        strokeWeight(
          random(
            0.1 + y / 500 - n / 10,
            0.3 + y / 100 - n / 10 - 1 / 5
          )
        );
        point(x + random(-2, 2), y+ random(-0, 100));
      }
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('rug', 'jpg');
  }
}