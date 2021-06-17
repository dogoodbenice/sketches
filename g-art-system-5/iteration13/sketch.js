var t=1;

function setup() {
  createCanvas(500, 500);
  // createLoop({
  //   duration: 6,
  //      gif: {
  //          options: { quality: 30},
  //          fileName: "topgraphy.gif",
  //          download: true,
  //          startLoop: 1,
  //          endLoop: 2
  //      }
  //  })
}

// function keyPressed() {
//   saveCanvas('movement', 'jpg');
// }

function draw() {
  background(30);
  stroke(255,100);
  strokeWeight(2);

  translate(width/2, height/2)

  for (var i = 0; i < 50; i++) {
    line(x1(t+i),y1(t+i),x2(t+i),y2(t+i))
  }

  t+=0.75;
}

function x1(t) {
  return sin(t/10) * 50 + sin(t/15)*50;
}

function y1(t) {
  return cos(t/10)*20;
}

function x2(t) {
  return sin(t/10) * 50 + sin(t/15)*20;
}

function y2(t) {
  return cos(t/10)*100;
}
