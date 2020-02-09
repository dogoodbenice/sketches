var lines, markov, data1, data2, x = 160, y = 240;

function preload() {
  data1 = loadStrings('data/research.txt');
  data2 = loadStrings('data/export.txt');
  data3 = loadStrings('data/incoterms.txt')
}

function setup() {
  createCanvas(500, 500);
  textFont('times', 16);
  textAlign(LEFT);
  lines = ["click to generate and save some GREAT content!"];
  // create a markov model w' n=3
  markov = new RiMarkov(2);
  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));
  markov.loadText(data3.join(' '));
  drawText();
}

function drawText() {
  background(250);
  text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {
  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
  saveStrings(lines, 'greatmarkovmash.txt');
}
