function setup() {
  createCanvas(1000, 1000);
  strokeCap(PROJECT);
  grid1();
}

function mousePressed() {
  grid1();
}

function keyPressed() {
  saveCanvas('grid', 'jpg');
}

function grid1() {
  const topColor = color('#9653DF');
  const bottomColor = color('#23DCC1');

  for(let y = 0; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    line(0, y, width, y);
  }

  let w = 50;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      noFill();
      stroke('#bb95ef');
      strokeWeight(5);

      let r = random(4);

      if (r < 1.2) {
        // diagonal top-left to bottom-right
        line(x, y, x + w, y + h);
        push()
        stroke(66, 191, 221, 100);
        ellipse(x,y,20);
        pop()
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        line(x + w, y, x, y + h);
        push()
        stroke(8, 75, 131, 100);
        ellipse(x,y,10);
        pop()
      } else if (r < 3) {
        // straight across top
        line(x, y, x + w, y + h);
      } else {
        rect(x, y, 15)
      }

    }
  }

}
