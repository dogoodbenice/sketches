// An array to store the positions of the letters and have the letters
let positions = [];
let items = ['L', 'O', 'V', 'E'];
let letterSize = 30;

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setup() {
  createCanvas(600, 600);
  background(255, 50, 25);
  textSize(letterSize);
  // Draw lots of letters
  for (let i = 0; i < 500; i++) {
    fill(255);
    // Set a random rotation angle
    let angle = random(-180, 180);
    rotate(angle);
    // Set a random position on the canvas
    let x = random(letterSize*2, width-letterSize);
    let y = random(letterSize*2, height-letterSize);
    // Check if the new position overlaps with any existing letters
    let overlaps = false;
    for (let i = 0; i < positions.length; i++) {
      let p = positions[i];
      let d = dist(x, y, p.x, p.y);
      if (d < textWidth("L")) {
        overlaps = true;
        break;
      } else if (d < textWidth("O")){
        overlaps = true;
        break;
      } else if (d < textWidth("V")){
        overlaps = true;
        break;
      } else if (d < textWidth("E")){
        overlaps = true;
        break;
      }  
    }
    // If the position does not overlap, draw the letter and store the position
    if (!overlaps) {
      text(random_item(items), x, y);
      positions.push({ x, y });
    }
    // Reset the rotation
    rotate(-angle);
  }
}

function mouseClicked() {
  // Save as an image
  save("letters.jpg");
}