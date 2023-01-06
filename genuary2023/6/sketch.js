let img;

function preload() {
  let randomNum = [Math.floor(Math.random() * 8)]
  img = loadImage(`assets/${randomNum}.png`);
}

function setup() {
  createCanvas(500, 500);
  noStroke();
  colourGrid();
  overlay();
  imageMode(CENTER);
  image(img, width/2, 290);
}

function colourGrid(){
  // Set the size of the squares in the grid
  let s = random(10,100);
  // Draw the colourful grid
  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      fill(random(255), random(255), random(255));
      rect(x, y, s);
    }
  }
}

function randomWord(){
  let words = ['stole', 'copied', 'took', 'borrowed', 'emulated','mimicked','imitated','plagiarized'];
  let selection = [Math.floor(Math.random() * words.length)];
  return words[selection]
}

function overlay(){
  stroke(0);
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  textSize(50);
  let stolenword = randomWord();
  text(`I ${stolenword} from`, width/2, 80);
  fill(255);
  text(`I ${stolenword} from`, width/2+1, 81);
}

function keyPressed() {
  // this will download the canvas
  if (key === 's') {
    saveCanvas('stolenartist', 'jpg');
  }
}