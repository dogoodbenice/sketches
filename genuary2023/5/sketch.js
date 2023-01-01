let myFont;
let x, y;

let value = (255)

let xpos = [];
let ypos = [];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

function preload() {
    font = loadFont('assets/Silkscreen-Regular.ttf');
    for (let i = 0; i < 100; i++) {
        xpos.push(Math.floor(random(0,canvasWidth)));
        ypos.push(Math.floor(random(0,canvasHeight)));
    }
}

function dateForText() {
    const d = new Date();
    return d;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textFont(font);
    stroke(0);
    fill(0);
    textSize(20);
    x = getRandomInt();
    y = getRandomInt();
}

function draw() {
    background(0);

    push();
    fill(value);
    ellipse(mouseX, mouseY, 150)
    pop();

    push();
    //fill(0)
    for (let i = 0; i < 50; i++) {
        text('console.log()', xpos[i], ypos[i]);
    }
    pop();
    push();
    textSize(25);
    fill(0)
    text(dateForText(), xpos[2], ypos[2]);
    pop();
}

function keyPressed() {
    // this will download the canvas
    if (key === 's') {
        saveCanvas('debugview', 'jpg');
    }
}

function  mousePressed(){
    if (value === 0) {
        value = 255;
      } else {
        value = 0;
      }
}