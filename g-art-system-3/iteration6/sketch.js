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
  background(30,80);
  var size = 3;
  var m = 20;
  angle += 0.1;

  //console.log(frameCount);
  translate(width / 2, height / 2);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotate(angle);
      for (var i = 0; i < 20; i++) {
        push()
        fill(255, 204, 0); //yellow
        ellipse(0,0, 20)
        pop()
        fill('#3b1ce3')
        ellipse(20*i, 50*i, size)
        ellipse(40*i, 50*i, size)
        ellipse(60*i, 50*i, size)
        ellipse(80*i, 50*i, size)
        ellipse(100*i, 50*i, size)
        ellipse(120*i, 50*i, size)
        ellipse(140*i, 50*i, size)
        ellipse(180*i, 50*i, size)
        ellipse(200*i, 50*i, size)
      }
    }
  }
}
