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
  background(240);
  let w = 50;
  let h = w;

  for (let x = 150; x <= 800 + w; x += w) { // columns
    for (let y = 150; y <= 800 + h; y += h) { // rows
      //strokeWeight(4);
      tsize = 40
      let r = random(5);

      if (r < 1) {
        push()
        noStroke();
        fill('#E0655A')
        rect(x, y, tsize)
        fill('#0AE8FC')
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
          fill('#0AE8FC')
          rect(x, y, tsize)
        } else {
          fill('#E0655A')
          rect(x, y, tsize)
        }
        fill('#E0655A')
        //rect(x, y, tsize)
        pop()
      }

    }
  }

}
