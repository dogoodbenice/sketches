var speed;

function setup() {
  createCanvas(1000, 1000);
  speed = 2
  // createLoop({
  //   duration: 6,
  //      gif: {
  //          options: { quality: 30},
  //          fileName: "topgraphy.gif",
  //          download: true,
  //          startLoop: 0,
  //          endLoop: 2
  //      }
  //  })
}
//
function keyPressed() {
  saveCanvas('movement', 'jpg');
}

function draw() {
  background(30);
  motion();
  //circ = (frameCount / speed + 5 / 0.01 + 5 / 1);

  //console.log(circ);
}

function motion() {
  var size = 50;
  var count = 10;
  for (var x = 5; x < 17; x++) {
    for (var y = 5; y < 17; y++) {
      push();
      translate(x * size, y * size);
      //fill(255, 250, 255, 20);
      stroke(255, 10);
      rotate((frameCount / x / speed + y / 1));
      rect(size/20, size/20, 2.5)
      rect(size/20, size/2, 2.5)
      rect(size/2, size/2, 2.5)
      rect(size/2, size/20, 2.5)
      strokeWeight(3);
      stroke(255);
      //rotateX((frameCount / speed + x / 0.01 + y / 1));
      ellipse(size/3, size/3, 10)
      pop();
    }
  }
}
