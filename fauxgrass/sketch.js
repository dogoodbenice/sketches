function setup() {
  createCanvas(600, 600);
  background('#F9F7E8');

  let numCurves = 15;  // Number of bezier curves
  let spacing = height / (numCurves - 0.5);  // Vertical spacing between curves
  
  background('#F9F7E8');
  noFill();
  
  strokeWeight(10);
  strokeCap(SQUARE);
  
  for (let i = 1; i <= numCurves; i++) {
    let startX = 100;  // Starting X-coordinate of the curve
    let startY = i * spacing;  // Starting Y-coordinate of the curve
    let endX = width - 100;  // Ending X-coordinate of the curve
    let endY = i * spacing;  // Ending Y-coordinate of the curve
    let controlX1 = 200;  // First control point X-coordinate
    let controlY1 = startY + random(-50, 50);  // First control point Y-coordinate
    let controlX2 = width - 200;  // Second control point X-coordinate
    let controlY2 = startY + random(-50, 50);  // Second control point Y-coordinate
    
    stroke('#61BFAD');
    beginShape();
    vertex(startX, startY);
    bezierVertex(controlX1, controlY1, controlX2, controlY2, endX, endY);
    endShape();
    stroke('#f5f3e4');
    beginShape();
    vertex(startX-1, startY);
    bezierVertex(controlX1+10, controlY1-10, controlX2-10, controlY2-10, endX+10, endY-10);
    endShape();
  }
}

function keyPressed() {
  if (key === 's') {
    save('wigglylines.jpg');
  }
}