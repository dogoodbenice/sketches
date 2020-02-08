var lines, data1, data2, x = 160, y = 240;
var order = 3;
var ngrams = {};

function preload() {
  data1 = loadStrings('data/researchinmarket.txt');
  data2 = loadStrings('data/test.txt');
}

function setup() {
  createCanvas(window.width, window.height);
  background(155);
  textFont('times', 16);
  textAlign(LEFT);
  text(data1,10,10,80,80);
  text(data2,100,100,100,100);

  for (var i = 0; i <= data1.length - order; i++) {
    var gram = data1.substring(i,i + 3);
    if (!ngrams[gram]){
      ngrams[gram] = 1;
    } else {
      ngrams[gram]++;
    }
    ngrams.push(gram);
  }
  console.log(ngrams);
}

function drawText() {
  background(250);
  text(data1,10,10,80,80);
  //text(lines.join(' '), x, y, 400, 400);
}

// function mouseClicked() {
//   x = y = 50;
//   lines = markov.generateSentences(10);
//   drawText();
// }
