function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER)
  grid1();
  noStroke();
}

function mousePressed() {
  grid1();
}

function keyPressed() {
  saveCanvas('blokgrid', 'jpg');
}

function grid1() {
  const topColor = color('#3D05DD');
  const bottomColor = color('#3D05DD');
  for (let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, height, y);
  }
  let w = 40;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      //strokeWeight(4);
      tsize = 30
      let r = random(5);

      if (r < 1) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        //left to centre mid
        triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        //right to centre mid
        //triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        //bottom to centre mid
        //triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        //top to centre mid
        //triangle(x-tsize/2, y-tsize/2, x, y, x+tsize/2, y-tsize/2);
        pop()
      } else if (r < 2) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        //left to centre mid
        //triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        //right to centre mid
        triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        //bottom to centre mid
        //triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        //top to centre mid
        //triangle(x-tsize/2, y-tsize/2, x, y, x+tsize/2, y-tsize/2);
        pop()
      } else if (r < 3) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        //left to centre mid
        //triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        //right to centre mid
        //triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        //bottom to centre mid
        triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        //top to centre mid
        //triangle(x-tsize/2, y-tsize/2, x, y, x+tsize/2, y-tsize/2);
        pop()
      } else if (r < 4) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
        //left to centre mid
        //triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        //right to centre mid
        //triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        //bottom to centre mid
        //triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        //top to centre mid
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
