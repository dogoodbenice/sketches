var speed;

function setup() {
  createCanvas(400, 400);
  speed = 20
  createLoop({
    duration: 4,
       gif: {
           options: { quality: 30},
           fileName: "topgraphy.gif",
           download: true,
           startLoop: 0,
           endLoop: 2
       }
   })
}

// function keyPressed() {
//   saveCanvas('movement', 'jpg');
// }

function draw() {
  background('#1B1464');
  motion();
}

function motion() {
  var size = 30;
  translate(20, 20);
  for (var x = 3; x < 10; x++) {
    for (var y = 3; y < 10; y++) {
      push();
      translate(x * size, y * size);
      fill(255, 250, 255,10);
      stroke(255, 10);
      rotate((frameCount / speed + x / 0.01 + y / 1));
      strokeWeight(3);
      stroke(255);
      ellipse(size/3, size/3, 10)
      //ellipse(size/3, size/3, 5)
      pop();
    }
  }
}
