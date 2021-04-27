
const seedX = Math.random()
const seedY = Math.random()
const radX = 0.7
const radY = 0.6
let ampX
let ampY

function setup() {
    createCanvas(600, 600)
    colorMode(HSB, 1, 1, 1)
    frameRate(30)
    background(255)
    noStroke()
    createLoop({
         gif: {
             options: { quality: 5 },
             fileName: "noiseLoop.gif",
            startLoop: 1,
             endLoop: 2
         }
    })
    ampX = width / 2
    ampY = height / 2
}

function draw() {
    //background(255)
    //stroke(255)
    fill(animLoop.progress, 0.5, 1)
    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY

    //console.log(animLoop)
    rect(x, y, 50, 50)
    rect(y, x, 50, 50)
}
