function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
	background(0);

	var step = random(0,10);
  console.log(step);

  for (var i = 0; i < 20; i+=1) {

		var start_angle = random(-200, 200);
			for (var angle  = start_angle; angle <= 100 + start_angle; angle += step) {
				var r = 200 + (noise(angle/10)*2 - 1) * 100;

				var x = r * cos(angle);
				var y = r * sin(angle);

        fill(255, 255, 255);
        ellipse((window.innerWidth/2.0) - x, (window.innerHeight/2) - y, 5);
        fill(0, 0, 255);
				ellipse((window.innerWidth/2.5) - x, (window.innerHeight/2) - y, 5);
        fill(255, 0, 0);
        ellipse((window.innerWidth/2.3) - x, (window.innerHeight/2) - y, 5);
        fill(0, 255, 0);
        ellipse((window.innerWidth/2.2) - x, (window.innerHeight/2) - y, 5);
		}

	}
}

function draw() {
  if (mouseIsPressed) {
    setup()
  }
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('shapesonshapes.jpg');
  }
}
