const CRYSTAL_SIZE = 200

//LAYOUT IN THE GRID
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 6
const ROWS = 6
const PADDING = CRYSTAL_SIZE * 0.1
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN
const totalX = START + GRIDBOX * COLUMNS
const totalY = START + GRIDBOX * ROWS


let PALETTE = []
ALL_CRYSTALS = []
const layers = []

function setup() {
  createCanvas(totalX, totalY)
  console.log(totalX)
  console.log(totalY)

  //This is our set of colours, amend these to define something new
  PALETTE = [
    color('white'),
    color('#dfe6e9'),
    color('#ecf0f1')
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  for (var x = 0; x < COLUMNS; x++) {
    for (var y = 0; y < ROWS; y++) {
      const posX = random(200,totalX)
      const posY = random(0,totalY)
      new Crystal(posX,posY)
      ALL_CRYSTALS.push(new Crystal(posX, posY))
      background('#fd79a8')
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
