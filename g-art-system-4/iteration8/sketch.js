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
//   saveCanvas('grid', 'jpg');
// }

function grid1() {
  const topColor = color('#0968E5');
  const bottomColor = color('#091970');
  push()
  for(let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);
    stroke(lineColor);
    //line(0, y, width, y);
    line(0, y, height/2, y);
  }

  for(let y = 0; y < 1000; y++) {
    const lineColor = lerpColor(bottomColor, topColor, y / width);
    stroke(lineColor);
    //line(0, y, width, y);
    line(1000, y, height/2, y);
  }
  pop()
  let w = 50;
  let h = w;

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      //noFill();
      //stroke('#3D05DD');
      //strokeWeight(4);
			tsize = 50
      let r = random(6);

      if (r < 1) {
        // diagonal top-left to bottom-right
        //rect(x,y,tsize)
      } else if (r < 2) {
        // diagonal top-right to bottom-left
        //line(x + w, y, x, y + h);
        noStroke();
        ellipse(x,y,tsize/2)
        //rect(x,y,tsize)
      } else if (r < 3) {
        // straight across top
        fill('#ef9cda')
        rect(x,y,tsize)
      } else if (r < 4) {
        //triangle(x-tsize, y+tsize, x+tsize, y+tsize, x+tsize, y+tsize);
        push()
        fill('#ef9cda')
        triangle(x+tsize/2, y+tsize/2, x-tsize/2, y-tsize/2, x-tsize/2, y+tsize/2);
        pop()
      } else {
        push()
        fill('#e870ca')
        triangle(x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2, x+tsize/2, y-tsize/2);
        pop()
      }

    }
  }

}
