// Declare global variables
let canvas;
let flowers = []; // array to hold all of the flowers
let numFlowers = (window.innerWidth/7); // number of flowers to create

function setup() {
  // Create the canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // Create the flowers and add them to the array
  for (let i = 0; i < numFlowers; i++) {
    flowers.push(new Flower());
  }
}

function draw() {
  // Set the background to a light blue color
  background(200, 200, 255);

  // Draw all of the flowers
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].draw();
    flowers[i].update();
  }
}

// Flower class
class Flower {
  constructor() {
    // Set the initial position and size of the flower
    this.x = random(width);
    this.y = random(height);
    this.size = random(20, 50);

    // Set the initial state of the flower (closed or open)
    this.state = round(random(0, 1)) === 0 ? "closed" : "open";

    // Set the rate at which the flower opens and closes
    this.rate = random(0.01, 0.05);
  }

  // Method to draw the flower
  draw() {
    push();
    noStroke();
    fill(255, 150, 150);
    translate(this.x, this.y);

    // Draw the petals of the flower
    for (let i = 0; i < 10; i++) {
      rotate(TWO_PI / 8);
      let petalLength = this.size * (this.state === "closed" ? 0.5 : 1);
      let petalWidth = petalLength / 2;
      ellipse(0, this.size / 2, petalWidth, petalLength);
    }

    // Draw the center of the flower
    fill(255, 255, 100);
    ellipse(0, 0, this.size / 2);
    pop();
  }

  // Method to update the state of the flower
  update() {
    if (this.state === "closed") {
      this.size += this.rate;
      if (this.size >= 50) {
        this.state = "open";
      }
    } else {
      this.size -= this.rate;
      if (this.size <= 20) {
        this.state = "closed";
      }
    }
  }
}
