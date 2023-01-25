let size;

function setup() {
  createCanvas(550, 550, WEBGL);
  fill(120);
  size = random(10, 40);
}

function draw() {
  background(0);
  let radius = width * 1.5;
  orbitControl(1, 1, 0.1);
  specularMaterial(250);
  shininess(5);
  let lightPosX = mouseX - width / 2;
  let lightPosY = mouseY - height / 2;
  pointLight(200, 200, 200, lightPosX, lightPosY, 50);
  ambientLight(60);

  translate(0, 0, -600);
  for (let i = 0; i <= 120; i++) {
    for (let j = 0; j <= 120; j++) {
      push();
      let a = (j / 100) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 3,
        cos(2 * a) * radius * sin(b)
      );
      sphere(5, 5, 60);
      pop();
    }
  }

  for (let i = 0; i <= 120; i++) {
    for (let j = 0; j <= 120; j++) {
      push();
      let a = (j / 10) * PI;
      let b = (i / 100) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      sphere(5, 5, 60);
      pop();
    }
  }

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      push();
      let a = (j / 20) * PI;
      let b = (i / 20) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / size,
        cos(2 * a) * radius * sin(b)
      );
      sphere(5, 5, 60);
      pop();
    }
  }

}

function keyPressed() {
  if (key === 's') {
    saveCanvas('kusamaview', 'jpg');
  }
}