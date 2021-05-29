const colors = ["#153A4D", "#77C6ED", "#21678A", "#14465E","#0F92D4","#77C6ED"];

function setup() {
  createCanvas(1000,1000);
  rectMode(CENTER)
  grid1();
  noStroke();
}

function mousePressed() {
  grid1();
}
// 
// function keyPressed() {
//   saveCanvas('flagrid', 'jpg');
// }

function grid1() {
  background(240);
  let w = 50;
  let h = w;

  for (let x = 150; x <= 800 + w; x += w) { // columns
    for (let y = 150; y <= 800 + h; y += h) { // rows
      //strokeWeight(4);
      tsize = 100
      let r = random(5);

      if (r < 1) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize)
        fill(colors[Math.floor(Math.random() * colors.length)])
        triangle(x, y, x - tsize / 2, y - tsize / 2, x - tsize / 2, y + tsize / 2);
        pop()
      } else if (r < 2) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize)
        fill(colors[Math.floor(Math.random() * colors.length)])
        triangle(x, y, x + tsize / 2, y - tsize / 2, x+ tsize / 2, y+ tsize / 2);
        pop()
      } else if (r < 3) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize)
        fill(colors[Math.floor(Math.random() * colors.length)])
        triangle(x, y, x+tsize/2, y+tsize/2, x-tsize/2, y+tsize/2);
        pop()
      } else if (r < 4) {
        push()
        noStroke();
        fill(colors[Math.floor(Math.random() * colors.length)])
        rect(x, y, tsize)
        fill(colors[Math.floor(Math.random() * colors.length)])
        triangle(x-tsize/2, y-tsize/2, x, y, x+tsize/2, y-tsize/2);
        pop()
      } else {
        push()
        noStroke();
        let picker = random(2);
        if (picker > 1) {
          fill(colors[Math.floor(Math.random() * colors.length)])
          ellipse(x, y, tsize)
        } else {
          fill(colors[Math.floor(Math.random() * colors.length)])
          ellipse(x, y, tsize)
        }
        pop()
      }

    }
  }

}
