var speed;

function setup() {
  createCanvas(1000, 1000);
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
  console.log(speed);
}

function motion() {
  var size = 40;
  var count = 10;
  translate(20, 20);
  for (var x = 5; x < 20; x++) {
    for (var y = 5; y < 20; y++) {
      push();
      translate(x * size, y * size);
      fill(255, 250, 255, 20);
      stroke(255, 10);
      rotate((frameCount / speed + x / 0.01 + y / 1));
      strokeWeight(3);
      stroke(255);
      ellipse(size/3, size/3, 10)
      pop();
    }
  }
}
