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
  let w = 200;
  let h = w;

  for (let x = 100; x <= 900 + w; x += w) { // columns
    for (let y = 100; y <= 1000; y += h) { // rows

      tsize = 200
      let r = random(5);
      if (r < 1) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        //left to centre mid
        triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        pop()
      } else if (r < 2) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        pop()
      } else if (r < 3) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        pop()
      } else if (r < 4) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        triangle(x-tsize/2, y-tsize/2, x, y, x+tsize/2, y-tsize/2);
        pop()
      } else {
        push()
        noStroke();
        let picker = random(4);

        if (picker > 2) {
          //fill('#E0655A')
          rect(x, y, tsize)
        } else {
          fill('#0AE8FC')
          rect(x, y, tsize)
        }
        fill('#E0655A')
        //rect(x, y, tsize)
        pop()
      }

    }
  }

}
