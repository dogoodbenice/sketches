function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setup() {
  rectMode(CENTER)
  textAlign(CENTER)
  createCanvas(600, 600);
  background('#EA2027');
  frame1Love(100, 100, 150);
  for (let i = 0; i < width; i += 150) {
    for (let b = 0; b < height; b += 150) {
      frame1Love(i, b, random(100,150));
    }
  }
}

function frame1Love(xpos, ypos, dimensions) {
  let positions = [];
  let items = ['L', 'O', 'V', 'E'];
  let letterSize = 30;
  fill('#FDA7DF')
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  textSize(letterSize);
  for (let i = 0; i < 28; i++) {
    fill(255);
    let angle = random(-180, 180);
    let x = random(xpos - (letterSize * 2), xpos + (letterSize * 2));
    let y = random(ypos - (letterSize * 2), ypos + (letterSize * 2));
    text(random_item(items), x, y);
    positions.push({ x, y });
  }
  strokeWeight(15);
  //frame
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)
  strokeWeight(1);
}

function frame2numbers(xpos, ypos, dimensions) {
  let positions = [];
  let items = ['1', '2', '3', '4'];
  let letterSize = 20;
  fill('#FDA7DF')
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  textSize(letterSize);
  for (let i = 0; i < 28; i++) {
    fill(255);
    let angle = random(-180, 180);
    let x = random(xpos - (letterSize * 2), xpos + (letterSize * 2));
    let y = random(ypos - (letterSize * 2), ypos + (letterSize * 2));
    text(random_item(items), x, y);
    positions.push({ x, y });
  }
  strokeWeight(15);
  //frame
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('maximalism', 'jpg');
  }
}