function setup() {
  createCanvas(1000, 1000);
  grid1();
}

function mousePressed() {
  grid1();
}

function keyPressed() {
  saveCanvas('flock', 'jpg');
}

function grid1() {
  const topColor = color('#9381FF');
  const bottomColor = color('#FFD8BE');

  for(let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, width, y);
  }

  let w = 50;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      noFill();
      stroke('#EF9CDA');
      strokeWeight(5);
			tsize = 10
      let r = random(4);

      if (r < 1) {
        // diagonal top-left to bottom-right
        //triangle(x+tsize, y+tsize, x-tsize, y-tsize, x-tsize, y+tsize);
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        triangle(x-tsize, y+tsize, x+tsize, y+tsize, x+tsize, y+tsize);
      } else if (r < 3.6) {
        // straight across top
        triangle(x+tsize, y+tsize, x-tsize, y+tsize, x-tsize, y+tsize);
      } else {
				push()
        stroke('#FFFFFF');
				triangle(x+tsize, y+tsize, x-tsize, y-tsize, x-tsize, y+tsize);
        pop()
      }

    }
  }

}
