class Layer {
  constructor() {
    this.sides = int(random(2,7)) //SIDES//Useful to play around with to create new shapes
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.layerColor = getRandomFromPalette()
  }
}

class Circles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.layerColor)
    strokeWeight(1)
    push()
    //translate(width/2, height/2)
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class OutlineShape extends Layer {
  constructor () {
    super()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    this.hexagonTrue = randomSelectTwo()
  }

  render () {
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    //translate(width/2, height/2)
    if (this.hexagonTrue) {
      hexagon(0, 0, CRYSTAL_SIZE / 2)
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    pop()
  }
}

class CenteredShape extends Layer {
  constructor () {
    super()
    this.randomShape = random(1)
    this.shapeSize = floor(random(this.stepsOut / 8, this.stepsOut)) * this.singleStep
  }

  render () {
    fill(this.layerColor)
    noStroke()
    push()
    //translate(width / 2, height / 2)
    if (this.randomShape < 0.1) {
      rect(0, 0, this.shapeSize, this.shapeSize)
    } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
      ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
    } else if (this.randomShape >= 0.6) {
      rotate(this.angle / 2)
      hexagon(0, 0, this.shapeSize)
    }
    pop()
  }
}

class SteppedHexagons extends Layer {
  constructor () {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
    this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15
    this.singleStep = ((CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }

  render () {
    stroke(this.layerColor)
    noFill()
    strokeWeight(this.weight)
    push()
    //translate(width / 2, height / 2)
    rotate(this.angle / 2)
    for (let i = 1; i < this.numSteps + 1; i++) {
      hexagon(0, 0, this.centerOffset + (i * this.singleStep))
    }
    pop()
  }
}
