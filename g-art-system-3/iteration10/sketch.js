let angle = 50
let offset = 1500000
let scalar = 9
let speed = 3

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  rectMode(CENTER)
  frameRate(10)
  noFill()
  createLoop({
    // duration: 6,
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
  background('#4A1970')
  var m = 9;
  angle += speed;
  var y = offset + sin(angle)
  var y1 = offset + cos(angle + 0.2) * scalar
  var y2 = offset + sin(angle + 5000) * scalar
  var y3 = offset + tan(angle + 0.2) * scalar
  //var z = sin(frameCount) * 45
  //rotateY(20)
  rotateX(40)

  push()
  translate(-400, -500);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#B98FD9')
        ellipse((100*i),(40+j),30)
    }
  }
  pop()
  push()
  translate(-400, -200);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#BC68FC')
        hexagon((100*i),(40+j),20)
    }
  }
  pop()
  push()
  translate(-400, 10);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#B98FD9')
        pentagon((100*i),(40+j),20)

    }
  }
  pop()

  push()
  translate(-400, 180);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        rotateX(y1);
        stroke('#B98FD9')
        rect((100*i),(40+j),30)
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
