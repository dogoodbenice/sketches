function setup() {
  createCanvas(800, 800);
  background(5);
  gridBackground();
  translate(width / 100, height / 10.6);
  grid();
}

function grid() {
  noStroke();
  
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      // Calculate the x and y position of each cell
      let x = (i * width) / 3;
      let y = (j * height) / 3;

      let randomGen = Math.floor(Math.random() * 5);
      //background white frame
      fill(255);
      rect(x + 15, y-45, 220);

      //background colour of stamp
      fill(random(255), random(255), random(255));
      rect(x + 25, y + -35, 200);

      //mini crest
      if (randomGen == 0) {
        fill(random(255), random(255), random(255));
        rect(x + 25, y-20, 50, 15);
        fill(random(255), random(255), random(255));
        rect(x + 25, y-20, 50, 20);
        rect(x + 25, y-5, 50, 20);
        fill(random(255), random(255), random(255));
        //to change
        triangle(x + 25, y + (75-60), x + 50, y + (25-60), x + 75, y + (75-60));
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y-10, 20);
      } else if (randomGen == 1) {
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y -10, 50, 50);
        fill(random(255), random(255), random(255));
        rect(x + 25, y -35, 50, 20);
        fill(random(255), random(255), random(255));
        //to change
        triangle(x + 25, y + (75-60), x + 50, y + (25-60), x + 75, y + (75-60));
        fill(random(255), random(255), random(255));
        rect(x + 45, y - 10, 10);
      } else if (randomGen == 2) {
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y -10, 50, 50);
        fill(random(255), random(255), random(255));
        rect(x + 25, y -35, 50, 20);
        fill(random(255), random(255), random(255));
        //to change
        triangle(x + 25, y + (75-60), x + 50, y + (25-60), x + 75, y + (75-60));
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y -10, 20);
      } else if (randomGen == 3) {
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y-10, 50, 50);
        fill(random(255), random(255), random(255));
        rect(x + 25, y-35, 50, 20);
        fill(random(255), random(255), random(255));
        triangle(x + 25, y + (75-60), x + 50, y + (25-60), x + 75, y + (75-60));
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y-10, 20);
      } else {
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y-10, 50, 50);
        fill(random(255), random(255), random(255));
        rect(x + 25, y-10, 50, 20);
        fill(random(255), random(255), random(255));
        //to change
        triangle(x + 25, y + (75-60), x + 50, y + (25-60), x + 75, y + (75-60));
        fill(random(255), random(255), random(255));
        ellipse(x + 50, y-10, 20);
      }

      //centre of the stamp
      if (randomGen == 0) {
        fill(random(255), random(255), random(255));
        rect(x + 100, y + 40, 50, 100);
        fill(random(255), random(255), random(255));
        triangle(x + 100, y + 90, x + 100, y + 40, x + 150, y + 90);
        triangle(x + 150, y + 40, x + 150, y + 140, x + 200, y + 140);
      } else if (randomGen == 1) {
        fill(random(255), random(255), random(255));
        //rect(x + 100, y + 10, 50);
        rect(x + 100, y + 20, 50, 120);
        ellipse(x + 150, y + 90, 100);
        fill(random(255), random(255), random(255));
        triangle(x + 150, y + 40, x + 150, y + 140, x + 200, y + 140);
      } else if (randomGen == 2) {
        fill(random(255), random(255), random(255));
        rect(x + 100, y + 40, 50, 100);
        fill(random(255), random(255), random(255));
        ellipse(x + 100, y + 90, 100);
        triangle(x + 150, y + 40, x + 150, y + 140, x + 200, y + 140);
      } else if (randomGen == 3) {
        fill(random(255), random(255), random(255));
        ellipse(x + 150, y + 90, 100);
        fill(random(255), random(255), random(255));
        rect(x + 100, y + 40, 50);
        fill(random(255), random(255), random(255));
        ellipse(x + 100, y + 90, 100);
      } else {
        fill(random(255), random(255), random(255));
        ellipse(x + 150, y + 90, 100);
        fill(random(255), random(255), random(255));
        ellipse(x + 125, y + 30, 100);
        fill(random(255), random(255), random(255));
        ellipse(x + 100, y + 90, 100);
        fill(255);
        textSize(100);
        textStyle(BOLDITALIC);
        text(Math.floor(Math.random() * 3), x + 85, y + 100);
      }
    }

  }
}

function mouseClicked() {
  setup();
}

function gridBackground() {
  stroke(230);
  strokeWeight(2);
  fill(0);
  
  // draw horizontal lines
  for (let i = 0; i < height; i += 20) {
    line(0, i, width, i);
  }

  // draw vertical lines
  for (let i = 0; i < width; i += 20) {
    line(i, 0, i, height);
  }

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('stampset', 'jpg');
  }
}