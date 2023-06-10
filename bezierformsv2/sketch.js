let minXRange = 25;
let maxXRange = 135;
let minYRange = 25;
let maxYRange = 135;

function setup() {
  createCanvas(600, 600);
  background('#FEDCCC');
  translate(width / 25, height / 25);
  grid();
}

function grid() {
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let x = i * width / 3;
      let y = j * height / 3;
      fill('#F87C4C');
      noStroke();
      rect(x, y, 150);

      let x1 = random(x + minXRange, x + maxXRange);
      let y1 = random(y + minYRange, y + maxYRange);
      let x2 = random(x + minXRange, x + maxXRange);
      let y2 = random(y + minYRange, y + maxYRange);
      let x3 = random(x + minXRange, x + maxXRange);
      let y3 = random(y + minYRange, y + maxYRange);
      let x4 = random(x + minXRange, x + maxXRange);
      let y4 = random(y + minYRange, y + maxYRange);
      
      noFill()
      strokeWeight(10);
      strokeCap(SQUARE);
      stroke('#FFFFFF');
      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
      stroke('#F87C4C');
      bezier(x1+5, y1+5, x2+5, y2+5, x3+5, y3+5, x4+5, y4+5);
      stroke('#FFFFFF');
      bezier(x1+10, y1+10, x2+10, y2+10, x3+10, y3+10, x4+10, y4+10);
      // stroke('#F87C4C');
      // bezier(x1-5, y1-5, x2-5, y2-5, x3-5, y3-5, x4-5, y4-5);
      // stroke('#FFFFFF');
      // bezier(x1-10, y1-10, x2-10, y2-10, x3-10, y3-10, x4-10, y4-10);
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('curvev2', 'jpg');
  }
}
