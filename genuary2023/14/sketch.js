let gridSz = 35;

function setup() {
  createCanvas(600, 600);
  background(245);
  for (var i = 0; i < width; i += gridSz+20) {
    for (var j = 0; j < height; j += gridSz + 10) {
      strokeWeight(2.55)
      noFill();
      beginShape();
      curveVertex(random(i+ (random(gridSz))), random(j+ (random(gridSz))));
      curveVertex(i, j);
      curveVertex(i, j);
      curveVertex(random(i+ (random(gridSz))), j + (random(gridSz)));
      curveVertex(random(i+ (random(gridSz))), j + (random(gridSz)));
      curveVertex((i+ (random(gridSz))), (j+ (random(gridSz))));
      endShape();
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('aesemic', 'jpg');
  }
}