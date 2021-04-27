
const seedX = Math.random()
const seedY = Math.random()
const radX = 0.7
const radY = 0.6
let ampX
let ampY

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)
    colorMode(HSB, 1, 1, 1)
    frameRate(30)
    background(255)
    noStroke()
    createLoop({
         gif: {
             options: { quality: 5 },
             fileName: "iteration2.gif",
             download: true,
             startLoop: 0,
             endLoop: 2
         }
    })
    ampX = width / 3
    ampY = height / 3
}

function draw() {
    //background(animLoop.progress, 0.5, 1)
    //fill(animLoop.progress, 0.5, 1)
    background(0)
    stroke(255)

    var z = sin(frameCount) * 45

    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY

    ellipse(y, x, z, z)
    //ellipse(y+100, x+20, z, z)
    ellipse(x, y, z, z)
}
