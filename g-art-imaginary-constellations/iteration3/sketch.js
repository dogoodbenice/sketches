var points = []

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

    let xpos1 = random(0,width);
    let ypos1 = random(0,height);
    let xpos2 = random(0,width);
    let ypos2 = random(0,height);
    ellipse(xpos1,ypos1,random(25,50))
    ellipse(xpos2,ypos2,random(25,50))
    if ((xpos1-xpos2)<100) {
      console.log(xpos1);
      console.log(xpos2);
      line(xpos1,ypos1,xpos2,ypos2)
    }
    if ((ypos1-ypos2)<100) {
      console.log(xpos1);
      console.log(xpos2);
      line(xpos1,ypos1,xpos2,ypos2)
    }

  }
}
