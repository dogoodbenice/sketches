function setup() {
  noStroke();
  createCanvas(500, 500);
  background(255, 50, 25);
  let angle = random(-0.06, 0.06);
  stroke(255);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < 12; i++) {
    rect(width/2,height/2,i*3);
    rotate(angle);
  }

  for (let i = 0; i < 12; i++) {
    stroke(255);
    rect(width/2,height/2,i*3.5);
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('minimalism', 'jpg');
  }
}