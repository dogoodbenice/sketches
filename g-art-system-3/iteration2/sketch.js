
const seedX = Math.random()
const seedY = Math.random()
const radX = 0.7
const radY = 0.6
let ampX
let ampY

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)
    frameRate(40)
    background(255)
    noStroke()
   createLoop({
     // framesPerSecond:40, gif:{
     //        options: { quality: 5 }, //pixel sample interval, lower is better
     //        fileName: "noiseLoop.gif",
     //        startLoop: 1,
     //        endLoop: 2
        //}
      })
    ampX = width / 5
    ampY = height / 5
}

function draw() {
    //background(animLoop.progress, 0.5, 1)
    //fill(animLoop.progress, 0.5, 1)
    background(0,50)
    //stroke(255)
    fill(255,255,0)

    var z = sin(frameCount) * 45

    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY

    ellipse(y, x, z, z)
    //ellipse(y+100, x+20, z, z)
    ellipse(x, y, z, z)
}
