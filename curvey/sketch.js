function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
	background(0);
  noFill();
	strokeWeight(10);

	var step = random(0,60);
  console.log(step);
	for (var i = 0; i < 30; i+=1) {

		noFill();
		var start_angle = random(-200, 200);
		for (var p=0; p<5; p++) {
			beginShape();

			for (var angle  = start_angle; angle <= 360 + start_angle; angle += step) {
				var r = 200 + (noise(angle/10)*2 - 1) * 100;
				var x = r * cos(angle);
				var y = r * sin(angle);
				strokeWeight(2+4*(1-p));
				stroke(150+20*p, 10+100*p, 250);
				curveVertex((window.innerWidth/2) + x, 450 - y);
			}

			endShape();
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
    saveCanvas('mycurvey.png');
  }
}
