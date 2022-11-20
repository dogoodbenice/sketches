let ellipsex, randomnumber;

function setup() {
  createCanvas(1000, 1000);
  noStroke();

}

function draw() {
  background(255);
  //randomnumber = Math.floor(Math.random() * 4);

  ellipseMode(CENTER);
  rectMode(CENTER);

  let from = color(random(0,200), random(0,200), random(0,200));
  let to = color(random(0,200), random(0,200), random(0,200));
  //fill(120);
  for (var i = 10; i < 900; i++) {
    for (var y = 10; y < 900; y++) {
      //rect([i], [y], 55,55);
      rect(30, 20, 55, 55);
    }
  }
  // if (randomnumber === 1) {
  //   textSize(32);
  //
  // } else if (randomnumber === 2) {
  //   for (var i = 0; i < 40; i++) {
  //     for (var y = 0; y < 40; y++) {
  //       fill(from);
  //       rect(ellipsex * [i], 60 * [y], 50, 50);
  //       fill(to);
  //       rect(ellipsex * [i], 60 * [y], 20, 20);
  //       fill(from);
  //       rect(ellipsex * [i], 60 * [y], 5, 5);
  //     }
  //   }
  // } else if (randomnumber === 3) {
  //   for (var i = 0; i < 40; i++) {
  //     for (var y = 0; y < 40; y++) {
  //       fill(from);
  //       ellipse(ellipsex * [i], 60 * [y], 50, 50);
  //       fill(to);
  //       ellipse(ellipsex * [i], 60 * [y], 20, 20);
  //     }
  //   }
  // }

}
