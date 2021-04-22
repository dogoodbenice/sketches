class Layer {
  constructor() {
    this.sides = int(random(2,10)) //Useful to play around with to create new shapes
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 12
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 6
    this.layerColor = getRandomFromPalette()
  }
}

class OutlineShape extends Layer {
  constructor () {
    super()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }

  render () {
    fill(this.layerColor)
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    for (var i = 0; i < 3; i++) {
      hexagon(0, 0, CRYSTAL_SIZE / int(random(2,20)))
    }
    for (var i = 0; i < 2; i++) {
      noFill()
      hexagon(0, 0, CRYSTAL_SIZE / int(random(2,10)))
    }
    pop()
  }
}

class CenteredShape extends Layer {
  constructor () {
    super()
    this.randomShape = random(1)
    this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut)) * this.singleStep
  }

  render () {
    stroke(this.layerColor)
    noFill()
    push()
    if (this.randomShape < 0.1) {
      rotate(this.angle / 8)
      hexagon(0, 0, this.shapeSize)
    } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
      ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
    } else if (this.randomShape >= 0.6) {
      //rotate(this.angle / 2)
      ellipse(0, 0, this.shapeSize * 1.8, this.shapeSize * 1.8)
      ellipse(0, 0, this.shapeSize * 2.0, this.shapeSize * 2.0)
      ellipse(0, 0, this.shapeSize * 2.2, this.shapeSize * 2.2)
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
    fill(this.layerColor)
    strokeWeight(this.weight)
    push()
    for (var a = 0; a < this.numSteps; a++) {
      rotate(int(random(0,360)))
      for (let i = 1; i < this.numSteps + 1; i++) {
        if (this.randomShape < 0.1) {
          hexagon(0, 0, this.shapeSize)
        } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
          ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else if (this.randomShape >= 0.6) {
          rotate(this.angle / 2)
          hexagon(0, 0, this.shapeSize)
        }
      }
    }
    pop()
  }
}
