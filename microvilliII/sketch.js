let tileWidth;
let tileHeight;
let colors = ["#F6E8CF", "#15AA8E", "#131314", "#F7E8D3", "#FFEB3B", "#F44336", "#03A9F4", "#009688"]

let villus = 25

function setup() {
  createCanvas(555, 555);
  tileWidth = width / villus;
  tileHeight = height / villus;
  noStroke();
  noLoop();
}


function draw() {
  for (let y = 0; y < height; y += tileHeight) {
    for (let x = 0; x < width; x += tileWidth) {
      let randomGen = Math.floor(Math.random() * 5);
      // Create a unique fill color for each tile
      fill(random(colors));
      if (randomGen == 0) {
        square(x, y, tileWidth);
        ellipse(x, y, tileWidth);
        ellipse(x+tileWidth, y+tileWidth, tileWidth);
      } else if (randomGen == 1) {
        square(x, y, tileWidth);
        ellipse(x, y, tileWidth);
        ellipse(x+tileWidth, y+tileWidth, tileWidth);
      } else if (randomGen == 2) {
        square(x, y, tileWidth);
        ellipse(x, y, tileWidth);
        ellipse(x+tileWidth, y+tileWidth, tileWidth);
      } else if (randomGen == 3) {
        square(x, y, tileWidth);
        ellipse(x, y, tileWidth);
        ellipse(x+tileWidth, y+tileWidth, tileWidth);
      } else {
        square(x, y, tileWidth);
        ellipse(x, y, tileWidth);
        ellipse(x+tileWidth, y+tileWidth, tileWidth);
      }
    }
  }
}


function keyPressed() {
  if (key === 's') {
    save('microvilliII.jpg');
  }
}