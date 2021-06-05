var speed;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  speed = random(10,20)
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
  var size = 40;
  var count = 10;
  translate(-20, -20);
  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      push();
      translate(x * size, y * size);
      //fill(255, 250, 255, 20);
      stroke(255, 10);
      rotateZ((frameCount / speed + x / 0.01 + y / 1));
      rect(size/20, size/20, 10)
      strokeWeight(3);
      stroke(255);
      //rotateX((frameCount / speed + x / 0.01 + y / 1));
      rect(size/3, size/3, 10)
      pop();
    }
  }
}
