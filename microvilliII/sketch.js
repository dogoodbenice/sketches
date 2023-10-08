let tileWidth;
let tileHeight;

//Increments of 5 starting from 10 for villus appear to work well up to 50, pehaps.
let villus = 25
let colors = ["#FBAF42","#F6E8CF","#15AA8E","#DA4626","#F7E8D3","#F9F0E6","#9E9E9E","#F44336","#8BC34A","#009688"]

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
      // Create a unique fill color for each tile
      fill(random(colors));
      //future iteraitons
      //square(x, y, 55, 20, 15, 10, 5);
      rect(x, y, tileWidth, tileHeight);
      ellipse(x,y,tileWidth, tileHeight);
    }
  }
}


function keyPressed() {
  if (key === 's') {
    save('microvilliI.jpg');
  }
}