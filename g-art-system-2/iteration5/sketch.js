const CRYSTAL_SIZE = 150
const SIDES = 6

//LAYOUT IN THE GRID
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 4
const ROWS = 4
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN

let PALETTE = []
ALL_CRYSTALS = []
const layers = []

function setup() {
  const totalX = START + GRIDBOX * COLUMNS
  const totalY = START + GRIDBOX * ROWS
  createCanvas(totalX, totalY)
  console.log(totalX)
  console.log(totalY)

  //This is our set of colours, amend these to define something new
  PALETTE = [
    color('#D8276C'),
    color('#C4D827'),
    color('#27D893'),
    color('#3B27D8')
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  for (var x = 0; x < COLUMNS; x++) {
    for (var y = 0; y < ROWS; y++) {
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      new Crystal(posX,posY)
      ALL_CRYSTALS.push(new Crystal(posX, posY))
      background(255,255,255)
    }
  }

  ALL_CRYSTALS.forEach(Crystal => {
    Crystal.render()
  });

}

function mouseClicked() {
  clear()
  draw()
}

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
}
