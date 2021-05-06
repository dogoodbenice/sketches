let angle = 30;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  frameRate(30)
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
  background(30,80);
  var size = 4.5;
  var m = 8;
  angle += 0.035;
  translate(width / 2, height / 2);
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      rotate(angle);
        stroke('white')
        rect(30*i,75,20)
    }
  }
}

function mousePressed(){
  console.log(angle);
}
