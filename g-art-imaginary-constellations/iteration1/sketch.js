var points = []
var mult = 0.005

function setup() {
  createCanvas(1000,1000)
  background('#E7E5DF')

  var density = 20
  var space = width / density

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x,y)
      points.push(p)
    }
  }
}

// function keyPressed() {
//   saveCanvas('topgraphy', 'jpg');
// }

function draw(){
  noStroke()
  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult,points[i].y * mult),0, 1, 0, 720)
    points[i].add(createVector(cos(angle),sin(angle)))

    if (angle > 200) {
      fill('#393E41')
    } else {
      fill('#D3D0CB')
    }
    ellipse(points[i].x,points[i].y,1)
  }
}
