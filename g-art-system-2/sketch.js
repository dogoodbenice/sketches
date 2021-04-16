const CRYSTAL_SIZE = 250
const SIDES = 8
let PALETTE = []

function setup() {
  createCanvas(500, 500)

  PALETTE = [
    color('#E84393'), // pink
    color('#0984e3'), // blue
    color('#F95B02'), // orange
    color('#00b894') // green
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(255, 255, 255);
  const cirlces = new Circles()
  cirlces.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

  //testLines()

  // let picker = random(1)
  // if (picker > 0.3) {
  //   outlineShape()
  // }

  // picker = random(1)
  // if (picker > 0.3) {
  //   simpleLines()
  // }

  // picker = random(1)
  // if (picker > 0.3) {
  //   circles()
  // }

}

function mouseClicked() {
  redraw();

}

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
}
