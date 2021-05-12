let angle = 30
let offset = 60
let scalar = 45
let speed = 4.05

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  frameRate(10)
  noFill()
  createLoop({
    // duration: 7,
    //    gif: {
    //        options: { quality: 30},
    //        fileName: "circue.gif",
    //        download: true,
    //        startLoop: 1,
    //        endLoop: 2
    //    }
  })
}

function draw() {
  background('#422040');
  var size = random(1,20);
  var m = 5;
  angle += speed;
  var x = offset + cos(angle + 200) * scalar
  var y = offset + sin(angle) * scalar
  var y1 = offset + sin(angle + 0.2) * scalar
  var y2 = offset + sin(angle + 100.8) * scalar

  push()
  translate(-200, 165);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < 10; j++) {
        rotateX(y2);
        stroke('#E3D985')
        point(200*i/2,50+j,10)
    }
  }
  pop()
  push()
  translate(-200, 0);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < 10; j++) {
        rotateX(x);
        stroke('#E3D985')
        rect(200*i/2,50+j,10)
    }
  }
  pop()
  push()
  translate(-200, -165);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < 10; j++) {
        rotateX(y2);
        stroke('#E3D985')
        ellipse(200*i/2,50+j,10)
    }
  }
  pop()
}
