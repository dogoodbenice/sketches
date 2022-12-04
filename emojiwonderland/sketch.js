// Set the number of rows and columns in the grid
const rows = 12;
const cols = 12;

// A bunch of emojs
const emojis = ["💩", "😂", "🍕", "🎉", "🦄", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🦝"];

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  noStroke();
}

function draw() {
  // Loop through all the rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Calculate the x and y position of each grid cell
      let x = i * width/rows;
      let y = j * height/cols;

      // Set the fill color for each cell using random values
      fill(random(255), random(255), random(255));
      // Draw the rect for each cell
      rect(x, y, width/rows, height/cols);
      // Choose a random emoji from the list
      let emoji = random(emojis);

      // Set the text size and alignmnet
      textSize(width/rows);
      textAlign(CENTER, CENTER);

      // Draw the emoji in the center of the cell
      text(emoji, x + width/rows/2, y + height/cols/2);
    }
  }
}

function mouseClicked() {
    // Save the current frame as an image
    save("my-emoji-wonderland.jpg");
}