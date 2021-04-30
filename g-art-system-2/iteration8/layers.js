class Layer {
  constructor() {
    this.sides = int(random(2,20)) //SIDES//Useful to play around with to create new shapes
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 1.5
    this.layerColor = getRandomFromPalette()
  }
}

class Pentagons extends Layer {
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
      hexagon(0, 0, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class SimpleLines extends Layer {
  constructor() {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
    this.angle = 360 / this.numShapes
  }

  render() {
    noFill()
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
      //translate(width/2, height/2)
      for (let i = 0; i < this.numShapes; i++) {
        line(this.start * this.step, 0, this.stop * this.step, 0)
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
    noFill()
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    if (this.hexagonTrue) {
      hexagon(0, 0, CRYSTAL_SIZE / int(random(2,5)))
    } else {
      hexagon(0, 0, this.shapeSize)
    }
    pop()
  }
}

class CenteredShape extends Layer {
  constructor () {
    super()
    this.randomShape = random(1)
    this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut)) * (this.singleStep)
  }

  render () {
    fill(this.layerColor)
    noStroke()
    push()
    //translate(width / 2, height / 2)
    if (this.randomShape < 0.1) {
      hexagon(0, 0, this.shapeSize)
    } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
      rotate(this.angle / 5)
      hexagon(0, 0, this.shapeSize)
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
    rotate(this.angle / 2)
    for (let i = 1; i < this.numSteps + 1; i++) {
      //rotate(this.angle / 2)
      hexagon(0, 0, this.centerOffset + (i * this.singleStep))
    }
    pop()
  }
}