const CRYSTAL_SIZE = 150

class Layer {
  constructor() {
    this.sides = int(random(50,100)) //SIDES//Useful to play around with to create new shapes
    this.numShapes = int(random(5,100))
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.stepsOut2 = 10
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 2.5
    this.layerColor = getRandomFromPalette()
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
    if (this.hexagonTrue) {
      hexagon(0, 0, CRYSTAL_SIZE/2)
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }
    pop()
  }
}

class RingOfShapes extends Layer {
  constructor () {
    super()
    this.steps = floor(random(1, this.stepsOut))
    this.center = this.steps * this.singleStep
    this.randomShape = random(1)
    this.direction = randomSelectTwo() // used for triangle only
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

    if (this.steps < this.stepsOut / 2) {
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if (this.steps > this.stepsOut / 2) {
      this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else {
      this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
    }
  }

  render () {
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        square(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.66) {
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}

class RingOfShapes2 extends Layer {
  constructor () {
    super()
    this.steps = floor(random(2, this.stepsOut2))
    this.center = this.steps * this.singleStep
    this.randomShape = random(1)
    this.direction = randomSelectTwo() // used for triangle only
    this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1)
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

    if (this.steps < this.stepsOut / 4) {
      this.radius = floor(random(1, this.steps)) * this.singleStep
    } else if (this.steps > this.stepsOut / 2) {
      this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
    } else {
      this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
    }
  }

  render () {
    stroke(this.layerColor)
    fill(this.fillColor)
    strokeWeight(this.weight)
    push()
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        ellipse(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.66) {
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}
