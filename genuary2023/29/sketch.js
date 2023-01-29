let colors = ['#FDA7DF', '#F79F1F', '#009432', '#B53471', '#A3CB38', '#12CBC4', '#D980FA', '#0652DD'];

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setup() {
  noStroke();
  rectMode(CENTER)
  textAlign(CENTER)
  createCanvas(600, 600);
  background('#EA2027');

  frame1(100, 100, 150);
  frame2(300, 100, 150);
  frame3(500, 100, 150);

  frame2(100, 300, 150);
  frame1(330, 340, 250);

  frame3(100, 500, 130);
  frame3(400, 540, 90);

  frame2(540, 280, 100);
  frame4(540, 420, 100);
}

//love
function frame1(xpos, ypos, dimensions) {
  //shadow
  fill(100);
  rect(xpos - 10, ypos - 10, dimensions + 5)

  let items = ['L', 'O', 'V', 'E'];
  let letterSize = 30;
  fill(random_item(colors))
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  textSize(letterSize);
  for (let i = 0; i < 28; i++) {
    fill(255);
    let x = random(xpos - (dimensions / 2.5), xpos + (dimensions / 2.5));
    let y = random(ypos - (dimensions / 2.5), ypos + (dimensions / 2.5));
    text(random_item(items), x, y);
  }
  strokeWeight(15);
  //frame
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)

  strokeWeight(1);
}
//xyz
function frame2(xpos, ypos, dimensions) {
  //shadow
  fill(100);
  rect(xpos - 10, ypos - 10, dimensions + 5)

  fill(random_item(colors))
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  for (let i = 0; i < 5; i++) {
    ellipse(xpos-i*2, ypos , dimensions / 2)
    ellipse(xpos+ i*2, ypos , dimensions / 2)
    ellipse(xpos, ypos - i*2, dimensions / 2)
    ellipse(xpos, ypos + i*2, dimensions / 2)
    ellipse(xpos, ypos, dimensions / 2)
  }
  //frame
  strokeWeight(15);
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)
  strokeWeight(1);
}

//shapes
function frame3(xpos, ypos, dimensions) {
  //shadow
  fill(100);
  rect(xpos - 10, ypos - 10, dimensions + 5)

  let items = ['X', 'O', 'X'];
  let letterSize = random(20, 30);
  fill(random_item(colors))
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  textSize(letterSize);
  for (let i = 0; i < 5; i++) {
    fill(255);
    let x = random(xpos - (dimensions / 2.5), xpos + (dimensions / 2.5));
    let y = random(ypos - (dimensions / 2.5), ypos + (dimensions / 2.5));
    text(random_item(items), x, y);
  }
  strokeWeight(15);
  //frame
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)
  strokeWeight(1);
}

function frame4(xpos, ypos, dimensions) {
  //shadow
  fill(100);
  rect(xpos - 10, ypos - 10, dimensions + 5)

  fill(random_item(colors))
  rect(xpos, ypos, dimensions - 3)
  //contents
  noFill();
  stroke(255);
  for (let i = 0; i < 10; i++) {
    rect(xpos, ypos , (dimensions /3)+i*3  )
  }
  //frame
  strokeWeight(15);
  noFill();
  stroke('#5758BB');
  rect(xpos, ypos, dimensions)
  strokeWeight(1);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('maximalism', 'jpg');
  }
}