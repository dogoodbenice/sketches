// An array to store the positions of the letters and have the letters
let positions = [];
let items = ['L', 'O', 'V', 'E'];
let letterSize = 5;

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setup() {
  createCanvas(600, 600);
  background(255, 50, 25);
  frame1(30, 30, 150);
}

function frame1(xpos, ypos, dimensions) {
  //frame
  fill(230);
  stroke(0);
  strokeWeight(15);
  rect(xpos, ypos, dimensions)
  //contents
  noFill();
  stroke(255);
  textSize(letterSize);
  // Draw lots of letters
  for (let i = 0; i < 10; i++) {
    fill(255);
    let angle = random(-180, 180);
    rotate(angle);
    // Set a random position within the rect
    let x = random(xpos-(dimensions+dimensions), xpos+dimensions);
    let y = random(ypos-(dimensions+dimensions), ypos+dimensions);
    // Check if the new position overlaps with any existing letters
    let overlaps = false;
    for (let i = 0; i < positions.length; i++) {
      let p = positions[i];
      let d = dist(x, y, p.x, p.y);
      if (d < textWidth("L")) {
        overlaps = true;
        break;
      } else if (d < textWidth("O")) {
        overlaps = true;
        break;
      } else if (d < textWidth("V")) {
        overlaps = true;
        break;
      } else if (d < textWidth("E")) {
        overlaps = true;
        break;
      }
    }
    text(random_item(items), x, y);
    positions.push({ x, y });
    rotate(-angle);
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('maximalism', 'jpg');
  }
}