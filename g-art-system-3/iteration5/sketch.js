let angle = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  frameRate(40)
  noStroke();
  createLoop({
       // gif: {
       //     options: { quality: 6 },
       //     fileName: "loop.gif",
       //    startLoop: 1,
       //     endLoop: 2
       // }
  })
}


function draw() {
  background(0,10);
  var size = sin(frameCount) * 15;
  var m = 2;
  angle += 2;
  fill(0,100,200)
  //fill(255, 204, 0); yellow
  translate(width / 2, height / 2);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotate(angle);
      ellipse(20, 50, size)
      ellipse(50, 100, size)
      ellipse(75, 80, size)
      ellipse(175, 80, size)
      //triangle(30, 75, 58, 20, 86, 75);
      rect(30,75,20)
      rect(60,175,20)
    }
  }
}
