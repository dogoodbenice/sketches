let angle = 30
let offset = 60
let scalar = 5
let speed = 2

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER)
  frameRate(10)
  noFill()
  createLoop({
    duration: 6,
       gif: {
           options: { quality: 30},
           fileName: "circue.gif",
           download: true,
           startLoop: 1,
           endLoop: 2
       }
  })
}

function draw() {
  background('#3D65D4')
  var m =6;
  angle += speed;
  var y = offset + sin(angle)
  var y1 = offset + cos(angle + 0.2) * scalar
  var y2 = offset + sin(angle + 500) * scalar
  //rotateZ(45)

  push()
  translate(-160, -190);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#57F7BC')
        hexagon((200*i)/3,(40+j),20)
    }
  }
  pop()
  push()
  translate(-160, -20);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#57F7BC')
        pentagon((200*i)/3,(40+j),20)

    }
  }
  pop()
  push()
  translate(-160, 160);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#57F7BC')
        rect((200*i)/3,(40+j),30)
    }
  }
  pop()
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
