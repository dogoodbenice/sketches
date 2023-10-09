let tileWidth;
let tileHeight;
let colors = ["#FBAF42","#F6E8CF","#15AA8E","#131314","#DA4626","#F7E8D3","#F9F0E6","#FFEB3B","#F44336","#03A9F4","#009688"]

let villus = 25

function setup() {
  createCanvas(555, 555);
  tileWidth = width / villus;
  tileHeight = height / villus;
  noStroke();
  noLoop();
}

function draw() {
  let randomGen = Math.floor(Math.random() * 5);
  for (let y = 0; y < height; y += tileHeight) {
    for (let x = 0; x < width; x += tileWidth) {
      let randomGen = Math.floor(Math.random() * 5);
      // Create a unique fill color for each tile
      fill(random(colors));
      
      if (randomGen == 0) {
        ellipse(x,y,tileWidth, tileHeight);
      } else if (randomGen == 1) {
        ellipse(x,y,tileWidth, tileHeight+2);
        //triangle(x + 25, y + 75, x + 50, y + 25, x + 75, y + 75);
      } else if (randomGen == 2) {
        //ellipse(x + 50, y + 50, 20);
        rect(x, y, tileWidth, tileHeight);
        ellipse(x,y,tileWidth+20, tileHeight+5);
      } else if (randomGen == 3) {
        rect(x, y, tileWidth, tileHeight);
        ellipse(x,y,tileWidth, tileHeight);
      } else {
        rect(x, y, tileWidth, tileHeight);
        ellipse(x,y,tileWidth, tileHeight);
        rect(x, y, tileWidth, tileHeight);
      }
    }
  }
}



function keyPressed() {
  if (key === 's') {
    save('microvilliI.jpg');
  }
}