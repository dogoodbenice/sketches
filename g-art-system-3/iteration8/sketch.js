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
    //        fileName: "tumble.gif",
    //        download: true,
    //        startLoop: 1,
    //        endLoop: 2
    //    }
   })
}

function draw() {
  background('#FBFEF9');
  var m = 10;
  let angle = sin(frameCount) * 11
  translate(-130, 0);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotateX(angle);
        stroke('#A63446')
        rect(30*j,40*i,30)
    }
  }
}
