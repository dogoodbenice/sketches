let angle = 10
let offset = 5
let scalar = 0.05
let speed = 0.05

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(10)
  noFill()
  createLoop({
    // duration: 8,
    //    gif: {
    //        options: { quality: 30},
    //        fileName: "agon.gif",
    //        download: true,
    //        startLoop: 1,
    //        endLoop: 2
    //    }
  })
}

function draw() {
  background('#DBCABD');
  angle += speed;
  var y = sin(angle) * 10;
  var y1 = offset - cos(angle) * scalar
  // var y2 = rot++;
  var y3 = offset + cos(angle + 5.2) * scalar
  var size = y * 3;
  rotateZ(450)

  push()
  translate(-225, 0);
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 20; j++) {
        rotateX(y);
        stroke('#0E609E')
        //rect(200*j/2,50+j,20)
        rect(10*i/2,50+j,20)
        stroke('#F26D61')
        hexagon(200*j/2,150+j,5)
        //hexagon(400*j/2,10+j,5)
        stroke('#99C6E8')
        pentagon(200*j/2,300+j,20)
    }
  }
  pop()
}

function mousePressed() {
  // console.log(y1);
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
