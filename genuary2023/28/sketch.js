let poetry = [];
let title;
let verse = ['I got the juice', 'Look upon thee', '', "you just don't know the words", '', 'I would like to be the air', 'NO,no,no', 'rocky rocket launcher', '', 'You do not have to be good', 'Love at the lips was touch', '', 'I was wrong', '', 'I have no time to stop and stare', 'My cup runeth over', 'Wu tang clan forever', 'Queens baby', 'nothing better than falling in love', 'rolling in green pastures', '', '', 'Of a surf-tormented shore,', 'Two roads diverged in a yellow wood', 'Now you understand', "They think Im telling lies", 'To cool in the peppermint wind', 'If you think it long and mad', 'but here alone', 'you want a better story', 'Cool face of the river', 'I am beating all my wings'];
let moveup;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(random(200, 255), 255, 255);
  moveup = 150;
  noLoop();
}

function mousePressed() {
  background(random(200, 255), random(0, 255), random(0, 255));
  let p = new poem;
  poetry.push(p);
  moveup += 100;

  for (var i = 0; i < poetry.length; i++) {
    poetry[i].show();
  }
  redraw();
}

function draw() {
  if (moveup > windowHeight) {
    clearpage();
  }
}

function clearpage() {
  moveup = 200;
  background(random(200, 255), random(0, 255), random(0, 255));
  poetry.splice(0, poetry.length);
}

class poem {
  constructor() {
    this.x = windowWidth / 2;
    this.y = moveup;
    this.versecount1 = random(verse);
    this.versecount2 = random(verse);
    this.versecount3 = random(verse);
    this.versecount4 = random(verse);
  }
  show() {
    textSize(23);
    textAlign(CENTER);
    textFont('Georgia');
    text(this.versecount1, this.x, this.y);
    text(this.versecount2, this.x, this.y + 25);
    text(this.versecount3, this.x, this.y + 45);
    text(this.versecount4, this.x, this.y + 65);
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('untitledpoem', 'jpg');
  }
}