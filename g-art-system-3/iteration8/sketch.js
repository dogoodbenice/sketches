let angle = 30;

function setup() {
  createCanvas(700, 700,WEBGL);
  angleMode(DEGREES);
  frameRate(50)
  noFill()
  createLoop({
   //  duration: 3,
   //     gif: {
   //         options: { quality: 30},
   //         fileName: "nofill.gif",
   //         download: true,
   //         startLoop: 1,
   //         endLoop: 3
   //     }
   })
}

function draw() {
  background(30);
  var size = 4.5;
  var m = 10;
  angle += 0.015;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotateZ(angle);
      rotateX(angle);
      rotateY(angle);
        stroke('white')
        rect(30*j,70*i,20)
    }
  }
}

function mousePressed(){
  console.log(angle);
}
