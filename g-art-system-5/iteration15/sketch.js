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
  t+=0.75;
  motion()
}

function motion() {
  var space = 55;
  var count = 6;
  speed = 50
  translate(110, 200);
  for (var x = 0; x < count; x++) {
    //for (var y = 0; y < count; y++) {
      push();
      translate(space, x*space);
      fill(255,200);
      stroke(255,50);
      strokeWeight(3);
      rotate((frameCount / speed + x / 0.02));
      for (var i = 0; i < 50; i++) {
        line(x1(t+i),y1(t+i),x2(t+i),y2(t+i))
        point(x1(t+i),y1(t+i))
        point(x2(t+i),y2(t+i))
      }
      pop();
    //}
  }
}

function x1(t) {
  return sin(t/10) * 50 + sin(t/15)*20;
}

function y1(t) {
  return cos(t/10)*50;
}

function x2(t) {
  return sin(t/10) * 25 + sin(t/15)*25;
}

function y2(t) {
  return cos(t/10)*100;
}
