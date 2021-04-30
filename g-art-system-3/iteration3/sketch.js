let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  frameRate(40)
  createLoop({
       gif: {
           options: { quality: 6 },
           fileName: "noiseLoop.gif",
          startLoop: 1,
           endLoop: 2
       }
  })
}


function draw() {
  background(255,50);
  var size = sin(frameCount) * 20;
  var m = 20;
  angle += 0.05;


  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      var x = map(i, 0, m - 1, 0, width);
      var y = map(j, 0, m - 1, 0, height);
      strokeWeight(size);
      rotateZ(angle);
      //rotateY(angle);
      point(x, y);
      rect(y, x, size)
    }
  }
}
