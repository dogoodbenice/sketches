let angle;

function setup() {
  createCanvas(600, 600, WEBGL);
  //angleMode(DEGREES);
  frameRate(100)
  noFill()
  createLoop({
    // duration: 15,
    //    gif: {
    //        options: { quality: 30},
    //        fileName: "ttriangle.gif",
    //        download: true,
    //        startLoop: 1,
    //        endLoop: 2
    //    }
   })
}

function draw() {
  background('#FBD4FF');
  var m = 3;
  let angle = (second() * 2)
  translate(-400, -200);
  //for (var i = 0; i < m; i++) {
    //for (var j = 0; j < m; j++) {

        stroke('#20B812')
        strokeWeight(4);
        ellipse(300,300,100)
        triangle(100,400,300,100,500,400)
        ellipse(100,400,100)
        ellipse(300,100,100)
        push()
        translate(0,0);
        //rotate(radians(frameCount));
        ellipseMode(CENTER);
        ellipse(500,400,100)
        pop()
    //}
  //}
  console.log(angle);
}
