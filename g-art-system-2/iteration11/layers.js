class Layer {
  constructor() {
    this.sides = 5 //SIDES//Useful to play around with to create new shapes
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 3
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.layerColor = getRandomFromPalette()
  }
}

class Circles extends Layer {
  constructor() {
    super()
    this.shapeSize = (CRYSTAL_SIZE / int(random(2,5))) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.layerColor)
    strokeWeight(1)
    push()
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
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
      this.radius = floor(random(1, (this.stepsOut / 10) + 1)) * this.singleStep
    }
  }

  render () {
    stroke(this.layerColor)
    strokeWeight(this.weight)
    push()
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        fill(this.fillColor)
        ellipse(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        noFill()
        rect(0, this.center, this.radius, this.radius)
      } else if (this.randomShape >= 0.66) {
        noFill()
        myTriangle(this.center, this.radius, this.direction)
      }
      rotate(this.angle)
    }
    pop()
  }
}
