var points = []

function setup() {
  createCanvas(750, 750)
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

function constellation(x, y) {
  fill(255,50)
  background(30);
  stroke(255);

  //Main constellation
  let inital = 150
  let xpos1 = random(inital, width-inital);
  let ypos1 = random(inital, height-inital);
  let xpos2 = random(inital, width-inital);
  let ypos2 = random(inital, height-inital);
  let xpos3 = random(inital, width-inital);
  let ypos3 = random(inital, height-inital);
  let xpos4 = random(inital, width-inital);
  let ypos4 = random(inital, height-inital);

  let axpos = []
  let ypos = []

  for (var i = 0; i < 20; i++) {
    
  }

  beginShape();
  vertex(xpos1, ypos1);
  vertex(xpos1, ypos3);
  vertex(xpos1, ypos2);
  vertex(xpos2, ypos2);
  vertex(xpos2, ypos2);
  vertex(xpos3, ypos2);
  vertex(xpos3, ypos3);
  vertex(xpos4, ypos2);
  vertex(xpos3, ypos4);
  endShape(CLOSE);
  circle(xpos1, ypos1,10);
  circle(xpos1, ypos1,10);
  circle(xpos1, ypos2,10);
  circle(xpos2, ypos2,10);
  circle(xpos2, ypos2,10);
  circle(xpos3, ypos2,10);
  circle(xpos3, ypos3,10);
  circle(xpos4, ypos2,10);
  circle(xpos3, ypos4,10);

  let stars = random(80, 200)
  for (var i = 0; i < stars; i++) {
    strokeWeight(2);
    let xpos5 = random(0, width);
    let ypos5 = random(0, height);
    point(xpos5,ypos5)
  }



}
