const colors = ["#F075A2", "#BA3A69", "#02D688", "#f7941d","#FF4D8E","#81F0C7"];

function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER)
  angleMode(DEGREES);
  grid1();
  noStroke();
}

function mousePressed() {
  grid1();
}

// function keyPressed() {
//   saveCanvas('flagrid', 'jpg');
// }

function hexagon (posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}


function grid1() {
  background(240);
  let w = 30;
  let h = w;

  for (let x = 150; x <= 845 + w; x += w) { // columns
    for (let y = 150; y <= 845 + h; y += h) { // rows
      //strokeWeight(4);
      tsize = 30
      let r = random(5);

      if (r < 1) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        hexagon(x, y, tsize/2)
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize/2)
        pop()
      } else if (r < 2) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        hexagon(x, y, tsize/2)
        fill(colors[Math.floor(Math.random() * colors.length)])
        ellipse(x, y, tsize/4)
        pop()
      } else if (r < 3) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        hexagon(x, y, tsize/2)
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize/2)
        pop()
      } else if (r < 4) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        hexagon(x, y, tsize/2)
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize/2)
        pop()
      } else {
        push()
        noStroke();
        let picker = random(2);
        if (picker > 1) {
          fill(colors[Math.floor(Math.random() * colors.length)])
          rect(x, y, tsize)
        } else {
          fill(colors[Math.floor(Math.random() * colors.length)])
          ellipse(x, y, tsize)
          fill(colors[Math.floor(Math.random() * colors.length)])
          ellipse(x, y, tsize/2)
        }
        pop()
      }

    }
  }

}
