let angle = 30
let offset = 60
let scalar = 45
let speed = 5

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
  background('#02EDB2');
  var size = random(1,20);
  var m = 6;
  angle += speed;
  var y = offset + sin(angle) * scalar
  var y1 = offset + cos(angle + 0.2) * scalar
  var y2 = offset + sin(angle + 500) * scalar
  rotateZ(45)
  push()
  translate(-125, 165);
  for (var i = 0; i < 10; i=i+20) {
    for (var j = 0; j < 10; j=j+10) {
        rotateX(y2);
        stroke('#080304')
        rect(50*i,50+j,15)
        line(50*i,50*i,50+j,15)
        rect(60*i,60+j,15)
        rect(70*i,70+j,15)
        rect(80*i,80+j,15)
    }
  }
  pop()

  push()
  translate(-225, -165);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < 10; j=j+10) {
        rotateX(y);
        stroke('#171113')
        rect(200*i/2,50+j,25)
    }
  }
  pop()
}
