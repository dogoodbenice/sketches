let angle = 2;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  frameRate(40)
  noStroke();
  createLoop({
       // gif: {
       //     options: { quality: 6 },
       //     fileName: "yellowloop.gif",
       //    startLoop: 0,
       //     endLoop: 2
       // }
  })
}


function draw() {
  background(255);
  var size = sin(frameCount) * 10;
  var m = 25;
  angle += 0.05;
  fill(255, 204, 0);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      var x = map(i, 0, m - 1, 0, width);
      var y = map(j, 0, m - 1, 0, height);
      rotateZ(angle);
      rotateX(angle);
      //rotateY(angle);
      rect(y, x, size)
    }
  }
  console.log(angle)
}
