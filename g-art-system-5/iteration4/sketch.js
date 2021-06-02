var points = []
var mult = 0.005

function setup() {
  createCanvas(1000,1000)
  background('#009FB7')
  frameRate(15)
  var density = 30
  var space = width / density

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x,y)
      points.push(p)
    }
  }
  createLoop({
    duration: 15,
       gif: {
           options: { quality: 30},
           fileName: "topgraphy.gif",
           download: true,
           startLoop: 1,
           endLoop: 2
       }
   })
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
      fill('#FED766')
    } else {
      fill('#FED766')
    }
    for (var y = 0; y < 5; y++) {
      ellipse(points[i].x,points[i].y,1)
      ellipse((points[i].x)+y,(points[i].y)+y,0.5)
      ellipse((points[i].x)+y*2,(points[i].y)+y,0.25)
    }


  }
}
