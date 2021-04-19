class Crystal {
  constructor(posX, posY) {
    this.x = posX
    this.y = posY
    this.layers = []

    layerConstructors.forEach(layerConstructors => {
      let picker = random(1)
      if (picker > layerConstructors.weight) {
        this.layers.push(layerConstructors.init())
      }
    })
  }

  render(){
    push()
    translate(this.x,this.y)
    this.layers.forEach(layer => {
      layer.render()
    })
    pop()
  }
}
