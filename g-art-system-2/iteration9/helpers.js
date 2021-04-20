function hexagon (posX, posY, radius) {
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


function randomSelectTwo () {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

function getRandomFromPalette () {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}

function myTriangle (center, radius, direction) {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE);
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}

//The weight and order of the below is used to define what users see.
const layerConstructors = [
  {
    name: 'Outline Shape',
    init: () => new OutlineShape(),
    weight: 0.6
  },
  {
    name: 'Pentagons',
    init: () => new Pentagons(),
    weight: 0.8
  },
  {
    name: 'Stepped Hexagons',
    init: () => new SteppedHexagons(),
    weight: 0.1
  }
]
