var points = []
var mult = 0.005

function setup() {
  createCanvas(1000,1000)
  constellation();

  // var density = 20
  // var space = width / density
  //
  // for (var x = 0; x < width; x += space) {
  //   for (var y = 0; y < height; y += space) {
  //     var p = createVector(x,y)
  //     points.push(p)
  //   }
  // }
}

function mousePressed() {
constellation();
}

// function keyPressed() {
//   saveCanvas('topgraphy', 'jpg');
// }

function constellation(x,y) {
  background(30);
  stroke(255);
  strokeWeight(4);
  let stars = random(1,20)
  for (var i = 0; i < stars; i++) {
    ellipse(random(0,width),random(0,height),random(25,50))
    line(random(0,width),random(0,height),random(0,width),random(0,height),)
  }
}

// //point((size/3), (size/3), 1, 1 );
// stroke(255,60);
// strokeWeight(0.5);
// line((size/3), (size/3), 1, 1 );
