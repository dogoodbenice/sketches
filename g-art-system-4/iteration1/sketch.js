/*
	generative pattern
*/

function setup() {
	createCanvas(600, 400);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background(220);

	let w = random(20, 40);
	let h = w;


	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows

			noFill();
			stroke('black');
			strokeWeight(5);

			let r = random(4);
			if (r < 1) {
				// diagonal top-left to bottom-right
				line(x, y, x + w, y + h);
			} else if (r < 2) {
				// diagonal top-right to bottom-left
				line(x + w, y, x, y + h);
			} else if (r < 3)  {
				// straigh across top
				line(x, y, x + w, y);
			} else {
				arc(x + w, y, w * 2, h * 2, PI * 0.5, PI);
			}




		}
	}
}
