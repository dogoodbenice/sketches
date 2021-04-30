const CRYSTAL_SIZE = 210

//LAYOUT IN THE GRID
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 5
const ROWS = 5
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
    color('#D52AAC'),
    color('#D52A56'), 
    color('#A92AD5')
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
      background('#070E23')
    }
  }

  ALL_CRYSTALS.forEach(Crystal => {
    Crystal.render()
  });

}

function keyTyped() {
  if (key === 's') {
    saveCanvas();
  }
}