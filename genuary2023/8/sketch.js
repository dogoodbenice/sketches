

function setup() {
  createCanvas(600, 600);
  background(255);
  
  textAlign(CENTER, CENTER);
  let fonts = ["Helvetica", "Palatino", "Times New Roman", "Courier New", "Georgia", "Baskerville"]
  let w = 5, h = 5, s = 80;
  
  translate(width / 6, height / 6);
  for(let x = 0; x < w; x++) {
    for(let y = 0; y < h; y++) {
      textFont(fonts[(x + y) % 6]);
      textStyle((x + y) % (random (0,6)) ? BOLD : BOLDITALIC);
      push(); 
      // move and then rotate
      translate(x * s + s / 2, y * s + s / 2);
      rotate(x * 0.5 + y * 0.6 + 1);
      fill(random(0,255),random(0,255),random(0,255));
      textSize(random(10,40))
      text("SDF", 0, 0);
      pop(); // load last position and rotation (reset)
    }
  }
}


function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('sdf', 'jpg');
  }
}