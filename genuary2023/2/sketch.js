// An array to split made in 10
let items = ['M', 'A', 'D', 'E', 'I', 'N', '10',' ! '];
let letterSize = 60;

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setup() {
  createCanvas(windowWidth - 60, windowHeight - 160);
  background(255, 50, 25);
  textSize(letterSize);  
  // Draw lots of letters
  for (let i = 0; i < 300; i++) {
    fill(255);
    // Set a random rotation angle
    let angle = random(-360,360);
    
    // place text in a random position on the canvas 
    textStyle(BOLD);
    rotate(angle);
    text(random_item(items), random(0,width), random(0,height));
    textStyle(ITALIC);
    rotate(angle);
    text(random_item(items), random(0,width), random(0,height));
    rotate(angle);
    textStyle(BOLDITALIC);
    text(random_item(items), random(0,width), random(0,height));
  }
}

function keyPressed() {
  // this will download the first 6 seconds of the animation!
  if (key === 's') {
    saveCanvas('mymadein10', 'jpg');
  }
}