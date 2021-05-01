let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  frameRate(40)
  //noStroke();
  createLoop({
       // gif: {
       //     options: { quality: 6 },
       //     fileName: "noiseLoop.gif",
       //    startLoop: 0,
       //     endLoop: 2
       // }
  })
}


function draw() {
  background(255);
  //var size = sin(frameCount) * 15;
  var m = 50;
  angle += 3;
  fill(255, 204, 0);
  //for (var i = 0; i < m; i++) {
    //for (var j = 0; j < m; j++) {
      // var x = map(i, 0, m - 1, 0, width);
      // var y = map(j, 0, m - 1, 0, height);
      rotateZ(angle);
      rotateX(angle);
      rotateY(angle);
      //rect(y, x, size)
      //ellipse(y, x, size)
      // point(10, 75, 20)
      // point(50, 175, 20)
      // point(100, 50, 20)
      // point(20, 50, 20)
      triangle(30, 75, 58, 20, 86, 75);
    //}
  //}
  //console.log(angle)
}
