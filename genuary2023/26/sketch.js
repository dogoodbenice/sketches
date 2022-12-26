let lines = [];

function setup() {
  createCanvas(800, 500);

  // Generate 10 random lines
  for (let i = 0; i < 25; i++) {
    lines.push(new Line());
  }

  background(255);

  // Draw the lines
  for (let line of lines) {
    line.display();
  }

  //frameandtext
  push();
  noStroke();
  fill(0);
  rect(615, 415, 155, 50);
  fill(255);
  strokeWeight();
  textSize(30);
  textFont('Georgia');
  text(`${randomName()}, ${randomAge()}`,625,450)
  pop();

  push();
  noFill();
  rectMode(CENTER)
  strokeWeight(30);
  rect(800 / 2, 500 / 2, 800, 500);
  pop();
}

//select a random name
function randomName() {
  let names = ['Oli', 'Alex', 'Rylie', 'Jordan', 'Dennis', 'Talia', 'Cael', 'Jess', 'Nat', 'Walter', 'Marlee', 'Lester', 'Alex', 'Nelly', 'Hollie'];
  const random = Math.floor(Math.random() * names.length);
  return names[random];
}

//select a random age
function randomAge() {
  let age = Math.floor(random(9)+1)
  return age
}

// Line class
class Line {
  constructor() {
    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = random(width);
    this.y2 = random(height);
    this.segments = random(10, 20);
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    stroke(this.color);
    strokeWeight(5);
    noFill();

    beginShape();
    for (let i = 0; i < this.segments; i++) {
      let x = map(i, 0, this.segments - 1, this.x1, this.x2);
      let y = map(i, 0, this.segments - 1, this.y1, this.y2);
      let offset = random(-25, 25);
      vertex(x, y + offset);
    }
    endShape();
  }
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('mysketch', 'jpg');
  }
}