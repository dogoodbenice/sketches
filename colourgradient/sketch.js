function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  let startColor = color(200, 100, 100);
  let endColor = color(0, 100, 100);
  let lerpAmount = map(sin(frameCount * 0.02), -1, 1, 0, 1);
  let bgColor = lerpColor(startColor, endColor, lerpAmount);
  background(bgColor);
}
