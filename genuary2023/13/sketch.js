let blobs, gridSz;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(255);
  gridSz = 75; // Each grid size will be 100 px w/h
  blobs = [];

  for (var i = 0; i < width; i += gridSz) {
    for (var j = 0; j < height; j += gridSz) {
      var obj = new Blob(gridSz * 0.5 + i, gridSz * 0.5 + j, 25);
      blobs.push(obj);
    }
  }
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].display();
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('blobs', 'png');
  }
}

class Blob {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.szDelta = this.rad * 0.35;
    this.blobObj = [];
    // constants
    this.res = random(10, 20); // the number of points 
    this.angle = 360 / this.res; // angular distance between each point
  }

  display() {
    this.blobObj = [];
    push();
    noStroke();
    translate(this.x, this.y);
    beginShape(); // start to draw custom shape
    stroke(50);
    var d = dist(this.x, this.y, width * 0.5, height * 0.5);
    strokeWeight(8);
    for (var i = 0; i < this.res; i++) {
      var randRad = min(this.rad, this.rad + random(-this.szDelta, this.szDelta));
      var nRad = this.rad + randRad;
      this.blobObj.push({
        "rad": randRad,
        "x": randRad * cos(this.angle * i),
        "y": randRad * sin(this.angle * i)
      });
      curveVertex(this.blobObj[i].x, this.blobObj[i].y);
    }
    curveVertex(this.blobObj[1].x, this.blobObj[1].y);
    curveVertex(this.blobObj[2].x, this.blobObj[2].y);
    endShape();
    pop();
  }

}
