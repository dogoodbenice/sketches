var speed;

function setup() {
  createCanvas(500, 500);
  speed = 60
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
  motion();
}

function motion() {
  var size = 40;
  var count = 13;

  for (var x = 0; x < count; x++) {
    for (var y = 0; y < count; y++) {
      push();
      translate(x * size, y * size);
      fill(255);
      stroke(255);
      rotate((frameCount / speed + x / 0.001 + y / 5));

      strokeWeight(3);

      rotate((frameCount / speed + x / 0.01 + y / 1));
      ellipse((size/3)-20, size/3, 5)
      line((size/3)-20,(size/3),size/3,size/3)
      ellipse(size/3, size/3, 5)



      pop();
    }
  }
}
