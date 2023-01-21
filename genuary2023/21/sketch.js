let tileSize;
let rows, cols;
let color1, color2, color3, color4, color5, color6;
let circleRadius;

function setup() {
  createCanvas(600, 600);
  circleRadius = random(100,150);
  stripeCount = 20;
  stripeThickness = 20;
  tileSize = 30;
  rows = floor(height / tileSize);
  cols = floor(width / tileSize);
  color1 = color(166,54,58);
  color2 = color(67,90,129);
  color3 = color(234,208,187);
  color4 = color(141,109,91);
  color5 = color(random(0,255), random(0,128), random(0,255));
  color6 = color(random(0,255), random(0,128), random(0,255));
  rectMode(CENTER)
}

function draw() {
  background(240);
  
  // Draw the tiles
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * tileSize;
      let y = i * tileSize;
      let c = (i + j) % 2 === 0 ? color1 : color2;
      fill(c);
      noStroke();
      rect(x, y, tileSize, 10);
      let d = (i + j) % 2 === 0 ? color3 : color4;
      fill(d);
      rect(x, y+10, tileSize, 10);
      fill(c);
      triangle(x+10,y+10,x+10,y+10,x+10,y+10);
      let e = (i + j) % 2 === 0 ? color5 : color6;
      fill(e);
      rect(x, y+20, tileSize, 10);
      ellipse(x, y+10, tileSize, 10);
    }
  }
  
  //cover the other areas
  fill(240);
  noStroke();
  rect(width/2, 0, 600, 40);
  rect(width/2, 600, 600, 40);
  rect(50, height/2, 100, 600);
  rect(550, height/2, 100, 600);

  //draw the border
  strokeWeight(10);
  stroke(50);
  noFill();
  rect(width/2, height/2, 400, 550);
  
  // Draw the rug hem
  fill(245)
  rect(width/2, 85, 300, 20);
  rect(width/2, 515, 300, 20);
  
  // Draw the rug 
  noFill();
  rect(width/2, height/2, 300, 450);
  ellipse(width/2, height/2, circleRadius*2);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('rug', 'jpg');
  }
}