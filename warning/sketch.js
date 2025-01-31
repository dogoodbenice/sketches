let car1, car2;
let speed = 2; // Default speed in units per frame
let stopped = false;
let initialX1 = -200, initialX2 = 200;
let timeToCollision = 5; // Default time to collision in seconds
let framesPerSecond = 60; // Assuming 60 FPS for p5.js default
let alertThreshold = 3; // Time in seconds before collision to alert

function setup() {
  createCanvas(600, 400, WEBGL);
  
  // Create sliders
  timeSlider = createSlider(1, 10, timeToCollision, 1); // Min 1, Max 10, Default 5, Step 1
  timeSlider.position(10, height + 10);
  timeSlider.style('width', '150px');
  
  alertSlider = createSlider(0, 5, alertThreshold, 0.5); // Min 0, Max 5, Default 3, Step 0.5
  alertSlider.position(10, height + 50);
  alertSlider.style('width', '150px');

  car1 = new Car(initialX1, 0, 0, color(255, 0, 0)); // Red car
  car2 = new Car(initialX2, 0, 0, color(0, 0, 255)); // Blue car
  frameRate(framesPerSecond);
}

function draw() {
  background(200);
  orbitControl();
  
  // Update variables based on slider values
  timeToCollision = timeSlider.value();
  alertThreshold = alertSlider.value();
  
  if (!stopped) {
    // Calculate distance between cars
    let distance = abs(car1.x - car2.x);
    let speedPerFrame = (distance / (timeToCollision * framesPerSecond));
    speed = speedPerFrame; // Adjust speed based on desired time to collision

    car1.move(speed, 0, 0);  // Move car1 towards car2
    car2.move(-speed, 0, 0); // Move car2 towards car1
    
    // Check if cars are too far apart and reset if so
    if (distance > width) {
      car1.x = initialX1;
      car2.x = initialX2;
    }
    
    // Calculate time to collision for alert
    let currentDistance = abs(car1.x - car2.x);
    let currentTTC = currentDistance / (speed * framesPerSecond);
    
    if (currentTTC <= alertThreshold && currentTTC > 0) {
      textSize(20);
      fill(255, 0, 0);
      textAlign(CENTER);
      text("Collision Alert!", 0, -200, 0);
    }
  }

  car1.display();
  car2.display();

  // Display slider info
  fill(0);
  textSize(12);
  textAlign(LEFT);
  text(`Time to Collision: ${timeToCollision}s`, timeSlider.x * 2 + timeSlider.width, height + 25);
  text(`Alert Threshold: ${alertThreshold}s`, alertSlider.x * 2 + alertSlider.width, height + 65);
}

function mousePressed() {
  if (mouseY > height) return; // Ignore clicks on the sliders
  stopped = true;
}

function mouseReleased() {
  if (mouseY > height) return; // Reset only if not clicking sliders
  stopped = false;
  car1.x = initialX1;
  car2.x = initialX2;
}

class Car {
  constructor(x, y, z, c) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = c;
  }

  move(dx, dy, dz) {
    this.x += dx;
    this.y += dy;
    this.z += dz;
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    fill(this.color);
    box(50, 30, 20);
    pop();
  }
}