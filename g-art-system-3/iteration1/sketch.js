function setup() {
    createCanvas(800, 800)
    angleMode(DEGREES)
    noLoop()
}

function draw() {
    background(40)
    noFill()
    stroke(255)

    translate(width / 4, height / 3)
    // const x = cos(animLoop.theta) * width / 3
    // const y = animLoop.noise() * height / 3
    // ellipse(x, y, 50, 50)

    for (var i = 0; i < 500; i++) {
      var z = sin(frameCount) * (int(random(5,500)))
      triangle(200, z, 100, 300, 300, 300);
    }

}
