function setup() {
  createCanvas(600, 600);
  background('#F9F7E8');
  strokeCap(SQUARE);
  
  // Generate random control points for the curve
  let x1 = random(width/2);
  let y1 = random(height/2);
  let x2 = random(width/2);
  let y2 = random(height/2);
  let x3 = random(width/2);
  let y3 = random(height/2);
  let x4 = random(width/2);
  let y4 = random(height/2);
  let z1 = random(height/2);
  
  // Set line color
  strokeWeight(15);

  // Draw the curve
  noFill(); 
  translate(width / 2.5, height / 2.5);
  let offset = 10;
  stroke('#36695F');
  bezier(x1, y1, -x2, y2, x3, -y3, x4, y4);
  stroke('#73DEC9');
  bezier(x1-offset, y1-offset, -x2-offset, y2-offset, x3-offset, -y3-offset, x4-offset, y4-offset);
  
  // Log positions to the console
  console.log('x1:', x1);
  console.log('y1:', y1);
  console.log('x2:', x2);
  console.log('y2:', y2);
  console.log('x3:', x3);
  console.log('y3:', y3);
  console.log('x4:', x4);
  console.log('y4:', y4);
  
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('curve', 'jpg');
  }
}