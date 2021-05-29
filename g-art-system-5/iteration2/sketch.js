var w = 1000,
    h = 1000;

const colors = ["#F27261", "#F59387", "#81CCD6", "#43A3B0","#C98279"];

function setup() {
    createCanvas(w, h);
    stroke(255);
    strokeWeight(3);
    init();
}

function mousePressed() {
    init();
}

function rand(max) {
    return Math.round(Math.random() * (max - 1));
}

function reset() {
    clear();
    background(0);
    noFill();

}

function init() {
    reset();
    horizontalLines(16, 8);
}

function horizontalLines(xspacing, yspacing) {
    var y = yspacing;
    var v = 0.25 + Math.random(noise(y));
    while (y < (height - yspacing)) {
        beginShape();
        for (var x = 0; x < width + xspacing; x += xspacing) {
            stroke(colors[randomIndex(colors.length,noise(x*y))]);
            if (noise(x) > 0.5) {
                vertex(x, y + v * 10);
            } else {
                vertex(x, y);
            }
        }
        endShape();

        y += yspacing;
    }

}

function variation(y) {
    return map(random(noise(y)), 0, 100, 200, 20);

}

function randomIndex(max,noise){
    return Math.round(Math.random()*(max-1));
}
