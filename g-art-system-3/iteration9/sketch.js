let angle;

function setup() {
  createCanvas(600, 600,WEBGL);
  angleMode(DEGREES);
  frameRate(20)
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
  background('#3C3F8C');
  var m = 3;
  let angle = sin(frameCount) * 200
  translate(0, -250);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotateY(angle);
        stroke('#E3DE44')
        triangle(30, 75, 58, 20, 86, 75);
        ellipse(58,20,10);
        triangle(30, 175, 58, 120, 86, 175);
        ellipse(158,120,10);
        triangle(30, 275, 58, 220, 86, 275);
        triangle(30, 375, 58, 320, 86, 375);
        ellipse(158,320,10);
        triangle(30, 475, 58, 420, 86, 475);
        ellipse(58,420,10);
    }
  }
  //console.log(angle);
}
