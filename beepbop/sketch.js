let ellipsex, randomnumber;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  frameRate(1);
}

function draw() {
  background(255);
  ellipsex = windowWidth / 18;
  randomnumber = Math.floor(Math.random() * 4);

  ellipseMode(CENTER);
  rectMode(CENTER);
  let from = color(random(0,200), random(0,200), random(0,200));
  let to = color(random(0,200), random(0,200), random(0,200));

  if (randomnumber === 1) {
    textSize(32);
    for (var i = 0; i < 40; i++) {
      for (var y = 0; y < 1000; y++) {
        fill(50);
        text('Beep bop', window.innerWidth/2, [y]);
      }
    }
  } else if (randomnumber === 2) {
    for (var i = 0; i < 40; i++) {
      for (var y = 0; y < 40; y++) {
        fill(from);
        rect(ellipsex * [i], 60 * [y], 50, 50);
        fill(to);
        rect(ellipsex * [i], 60 * [y], 20, 20);
        fill(from);
        rect(ellipsex * [i], 60 * [y], 5, 5);
      }
    }
  } else if (randomnumber === 3) {
    for (var i = 0; i < 40; i++) {
      for (var y = 0; y < 40; y++) {
        fill(from);
        ellipse(ellipsex * [i], 60 * [y], 50, 50);
        fill(to);
        ellipse(ellipsex * [i], 60 * [y], 20, 20);
      }
    }
  }

}
