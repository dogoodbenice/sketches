function setup() {
	createCanvas(600, 600);
	grid();
}

function mousePressed() {
	saveCanvas('myCanvas', 'jpg');
	grid();
}

function grid() {
	background(255,102,179);
	let w = 40;
	let h = w;

	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows
			noFill();
			stroke(240,246,246);
			strokeWeight(5);

			let r = random(4);

			if (r < 1) {
				// diagonal top-left to bottom-right
				line(x, y, x + w, y + h);
				push()
				stroke(66,191,221,100);
				ellipse(x,y,20);
				pop()
			} else if (r < 2) {
				// diagonal top-right to bottom-left
				line(x + w, y, x, y + h);
				push()
				stroke(8,75,131,100);
				ellipse(x,y,10);
				pop()
			} else if (r < 3)  {
				// straigh across top
				line(x, y, x + w, y);
			} else {
				line(x, y, x + w, y);
			}

		}
	}
}
