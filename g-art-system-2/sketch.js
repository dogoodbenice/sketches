const CRYSTAL_SIZE = 250
const SIDES = 8
let PALETTE = []

const layers = []

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
  // const cirlces = new Circles()
  // cirlces.render()
  //
  // const simpleLines = new SimpleLines()
  // simpleLines.render()
  //
  // const outlineShape = new OutlineShape()
  // outlineShape.render()
  //testLines()

  let picker = random(1)
  if (picker > 0.3) {
    layers.push(new OutlineShape())
  }

  picker = random(1)
  if (picker > 0.3) {
    layers.push(new SimpleLines())
  }

  picker = random(1)
  if (picker > 0.3) {
    layers.push(new Circles())
  }

  layers.forEach(layer => {
    background(255, 255, 255);
    layer.render()
  });

}

function mouseClicked() {
  redraw();

}

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
}
