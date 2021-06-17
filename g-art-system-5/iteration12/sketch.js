var t = 1;

function setup() {
  createCanvas(500, 500);
  background(30);
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
  stroke(255,100);
  strokeWeight(5);

  translate(width/2, height/2)
  point(x1(t),y1(t))
  point(x2(t),y2(t))
  t++;
}

function x1(t) {
  return sin(t/10) * 50 + sin(t/15)*random(100,200);
}

function y1(t) {
  return cos(t/10)*random(100,200);
}

function x2(t) {
  return sin(t/10) * 50 + sin(t/15)*20;
}

function y2(t) {
  return cos(t/10)*100;
}
