let angle;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(40)
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
  background(30,80);
  var size = 4.5;
  var m = 8;
  angle += 0.035;
  translate(width / 2, height / 2);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotate(angle);
        stroke('white')
        push();
        translate(i,j)
        strokeWeight(size);
        drawshape();
        pop()
    }
  }
}

function drawshape() {
  ellipse(30, 30, 10)
  ellipse(30, 30, 30)
  ellipse(10, 40, 10)
  //triangle(100, 400, 300, 100, 500, 400)
  ellipse(10, 40, 20)
  ellipse(30, 10, 20)
  ellipse(50, 40, 20)
}
