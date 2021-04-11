const CRYSTAL_SIZE = 600
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(800,800);
  PALETTE = [
    color(46,204,113),
    color(142,68,173),
    color(237,76,103),
    color(18,203,196)
  ]
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
  noFill()
}

function draw() {
  createShape()
  additionalShape()
  simpleLines()
  circles()

  let picker = random(1)
  if (picker > 0.3) {

  }
}

function mouseClicked() {
  redraw();
  console.log('New');
}

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
}

function circles() {
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (CRYSTAL_SIZE / 2) * random(1)
  const position = (CRYSTAL_SIZE / 2) - (shapeSize / 2)
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(strokeColor)
  strokeWeight(1)
  push()
  translate(width/2, height/2)
  for (var i = 0; i < numShapes; i++) {
    ellipse(position,0,shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}


function simpleLines() {
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
  const step = (CRYSTAL_SIZE / 2) / numSteps
  const start = floor(random(0,numSteps))
  const stop = floor(random(start,numSteps + 1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1: 3
  const angle = 360 / numShapes

  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    for (var i = 0; i < numShapes; i++) {
      line(start * step,0,stop * stop, 0)
      rotate(angle)
    }
  pop()
}

function createShape() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  noFill()
  push()
    translate(width/2, height/2)
    ellipse(0,0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (var i = 0; i < numShapes; i++) {
      line(0,0,0, CRYSTAL_SIZE / 2)
      rotate(angle)
    }
  pop()
}

function additionalShape() {
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1: 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2,height/2)
    if (hexagonTrue) {
      hexagon(0,0, CRYSTAL_SIZE / 2)
    } else {
      ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE)
    }
  pop()
}
