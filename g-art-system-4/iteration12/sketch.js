function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER)
  grid1();
  noStroke();
}

function mousePressed() {
  grid1();
}

// function keyPressed() {
//   saveCanvas('blokgrid', 'jpg');
// }

function grid1() {
  const topColor = color('#F5BFD7');
  const bottomColor = color('#CAEFD7');
  for (let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, height, y);
  }
  let w = 40;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      strokeWeight(4);
      tsize = 40
      let r = random(5);

      if (r < 1) {
        // diagonal top-left to bottom-right
        // push()
        // noStroke();
        // fill('#2720E8')
        // triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        // pop()
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        //line(x + w, y, x, y + h);
        noStroke();
        fill('#0251f8')
        rect(x, y, tsize)
        triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
      } else if (r < 3) {
        // straight across top
        push()
        noStroke();
        fill('#125A99')
        rect(x, y, tsize)
        fill('#4F2078')
        triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        pop()
      } else if (r < 4) {
        //triangle(x-tsize, y+tsize, x+tsize, y+tsize, x+tsize, y+tsize);
        // push()
        // noStroke();
        // fill('#385CB0')
        // triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        // pop()
      } else {
        // push()
        // noStroke();
        // fill('#02317D')
        // triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y + tsize / 2, x + tsize / 2, y - tsize / 2);
        // pop()
      }

    }
  }

}
