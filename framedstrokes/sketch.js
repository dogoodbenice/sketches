// Set up canvas
function setup() {
  createCanvas(700, 700);
  background(255);
  noStroke();
  // Add texture to frame
  noStroke();
  fill(200);
  //rect(10, 10, width-20, height-20);
  
  //Generate paint flecks
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 25);
    let c = color(random(255), random(255), random(255));
    stroke(c);
    strokeWeight(r);
    line(x+r/(random(2,50)), y-r/(random(2,50)), x-r/(random(1,50)), y + r/(random(2,50)));
  }

  for (let i = 0; i < 300; i++) {
    let x = random(width/2);
    let y = random(height);
    let r = random(5, 25);
    let c = color(random(255), random(255), random(255));
    stroke(c);
    strokeWeight(r);
    line(x+r/(random(2,50)), y+r/(random(2,50)), x+r/(random(1,50)), y + r/(random(2,50)));
  }

  for (let i = 0; i < 20; i++) {
    let x = random(width/3);
    let y = random(height);
    let r = random(5, 25);
    let c = color(random(255), random(255), random(255));
    stroke(c);
    strokeWeight(r);
    line(x+r+(random(2,5)), y+r/(random(2,50)), x+r/(random(1,50)), y + r/(random(2,50)));
  }

  // // Generate paint flecks
  // for (let i = 0; i < 500; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(5, 25);
  //   let c = color(random(255), random(255), random(255));
  //   fill(c);
    
  //   // Use noise to generate random shape
  //   beginShape();
  //   for (let a = 0; a < TWO_PI; a += 0.1) {
  //     let offset = noise(x + cos(a), y + sin(a)) * r;
  //     let xx = x + cos(a) * offset;
  //     let yy = y + sin(a) * offset;
  //     vertex(xx, yy);
  //   }
  //   endShape(CLOSE);
  // }


  // Draw frame
    stroke(0);
    strokeWeight(20);
    noFill();
    rect(0, 0, width, height);
}


function mouseClicked() {
    // Save the current frame as an image
    save("paint-flecks.jpg");
}