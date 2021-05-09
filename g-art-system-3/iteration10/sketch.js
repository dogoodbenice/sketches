let angle;

function setup() {
  createCanvas(600, 600, WEBGL);
  //angleMode(DEGREES);
  frameRate(100)
  noFill()
  createLoop({
    // duration: 15,
    //    gif: {
    //        options: { quality: 30},
    //        fileName: "ttriangle.gif",
    //        download: true,
    //        startLoop: 1,
    //        endLoop: 2
    //    }
  })
}

function draw() {
  background('#FBD4FF');
  translate(-250, -250);
  for (var x = 1; x < 3; x++) {
    //for (var y = 1; y < 50; y = y+50){
    //rotateY(radians(frameCount));
    push();
    stroke('#20B812')
    drawshape();
    //}
  }
  console.log(angle);
}

function drawshape() {
  strokeWeight(4);
  ellipse(300, 300, 100)
  ellipse(300, 300, 300)
  ellipse(100, 400, 10)
  //triangle(100, 400, 300, 100, 500, 400)
  ellipse(100, 400, 200)
  ellipse(300, 100, 200)
  ellipse(500, 400, 200)
}
