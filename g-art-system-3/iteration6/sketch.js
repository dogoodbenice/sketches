let angle = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  frameRate(40)
  noStroke();
  createLoop({
       // gif: {
       //     options: { quality: 9 },
       //     fileName: "solar.gif",
       //     download: true,
       //     startLoop: 1,
       //     endLoop: 2
       // }
  })
}

function draw() {
  background(30,80);
  var size = 4.5;
  var m = 20;
  angle += 0.025;

  translate(width / 2, height / 2);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotate(angle);
        fill('#3b1ce3')
        ellipse(20*i, 50*j, size)
        //ellipse(40*i, 50*j, size)
        //ellipse(60*i, 50*i, size)
        //ellipse(80*i, 50*i, size)
    }
  }
  push()
  fill(255, 204, 0); //yellow
  ellipse(0,0, 20)
  pop()
}
