//var size = 5;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 1, 1, 1)
  angleMode(DEGREES);
  frameRate(30)
  noStroke()
  createLoop({
       // gif: {
       //     options: { quality: 5 },
       //     fileName: "noiseLoop.gif",
       //    startLoop: 1,
       //     endLoop: 2
       // }
  })
}


function draw() {
  background(255);
  var numFrames = 60;
  var size = sin(frameCount) * 45
  var m = 20;
  fill(animLoop.progress, 0.5, 1)
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      var x = map(i, 0, m - 1, 0, width);
      var y = map(j, 0, m - 1, 0, height);
      //var size = periodicFunction(t-offset(x,y)); // the important line of code
      //strokeWeight(size);
      //point(x, y);
      rect(y+size, x+size, size)
    }
  }
  console.log(size)
  // if(frameCount<=numFrames)
  // {
  //   saveCanvas("fr###.jpg");
  // }
  // if(frameCount==numFrames)
  // {
  //   console.log("All frames have been saved");
  // }
}
