var w = 600,
    h = 600;

let angle = 30;

var spacing = 10;

var inc;

function setup() {
    createCanvas(w, h);
    reset();
    grid();
    ellipseMode(CENTER);
}

function draw(){
  angle += 0.035;
  translate(width / 2, height / 2);
  rotate(angle);
  reset();
  grid();
}

function mousePressed() {
    reset();
    grid();
}

function reset() {
    clear();
    background(0);
    stroke(255);
    inc = spacing * 0.05;
}

function grid() {
    var dir = random(.75, 10.75);
    for (var x = spacing ; x < width ; x += spacing * 2) {
        for (var y = spacing ; y < height ; y += spacing * 2) {
            var change = map(x * y, 0, width * height, 0, 1);
            strokeWeight(map(change, 0, 1, .9, 2.5));
            stroke(map(change, 0, 1, 215, 255));

            line(x, y, x - spacing / 2, y - spacing / dir);
            line(x, y, x + spacing / 2, y + spacing / 2);
        }
    }
}
