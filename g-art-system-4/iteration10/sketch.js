function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER)
  grid1();
  noStroke();
}

function mousePressed() {
  grid1();
}

// function keyPressed() {
//   saveCanvas('cgrid', 'jpg');
// }

function grid1() {
  const topColor = color('#DDB4F6');
  const bottomColor = color('#8DD0FC');
  for (let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, width, y);
    //line(0, y, height/2, y);
  }
  let w = 60;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      strokeWeight(4);
      tsize = 60
      let r = random(6);

      if (r < 1) {
        // diagonal top-left to bottom-right
        //rect(x,y,tsize)
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        //line(x + w, y, x, y + h);
        noStroke();
        fill('#fcb98d')
        rect(x, y, tsize)
      } else if (r < 3) {
        // straight across top
        // fill('#ef9cda')
        // rect(x,y,tsize)
      } else if (r < 4) {
        //triangle(x-tsize, y+tsize, x+tsize, y+tsize, x+tsize, y+tsize);
        push()
        noStroke();
        fill('#fc8d99')
        triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        pop()
      } else {
        push()
        noStroke();
        fill('#fcf18d')
        triangle(x + tsize / 2, y + tsize / 2, x - tsize / 2, y + tsize / 2, x + tsize / 2, y - tsize / 2);
        pop()
      }

    }
  }

}
