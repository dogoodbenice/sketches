let angle = 30
let offset = 60
let scalar = 100000
let speed = 0.05

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(10)
  noFill()
  createLoop({
    duration: 7,
       gif: {
           options: { quality: 30},
           fileName: "agon.gif",
           download: true,
           startLoop: 1,
           endLoop: 2
       }
  })
}

function draw() {
  background('#DBCABD');
  var size = random(1,20);
  var m = 3;
  angle += speed;
  var y = sin(angle) * 10;
  var y1 = offset - cos(angle - 500) * scalar
  var y2 = offset + cos(angle + 500) * scalar
  rotateZ(450)

  push()
  translate(-225, 0);
  for (var i = 0; i < 25; i++) {
    for (var j = 0; j < 10; j++) {
        stroke('#0E609E')
        rect(200*j/2,50+j,25)
        rotateX(y);
        stroke('#F26D61')
        hexagon(200*j/2,150+j,25)
        stroke('#99C6E8')
        pentagon(200*j/2,300+j,25)
    }
  }
  pop()

}

function mousePressed() {
  console.log(mouseX);
}

function hexagon (posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pentagon (posX, posY, radius) {
  const rotAngle = 360 / 5
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
