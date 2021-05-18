/*
	generative pattern
*/

function setup() {
	createCanvas(600, 600);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background(30);
	let w = 30;
	let h = w;

	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows
			noFill();
			stroke(255);
			strokeWeight(5);

			let r = random(4);
			if (r < 1) {
				// diagonal top-left to bottom-right
				line(x, y, x + w, y + h);
				push()
				stroke(0,100,255,100);
				ellipse(x,y,20);
				pop()
			} else if (r < 2) {
				// diagonal top-right to bottom-left
				line(x + w, y, x, y + h);
				push()
				stroke(0,100,255,100);
				ellipse(x,y,20);
				pop()
			} else if (r < 3)  {
				// straigh across top
				line(x, y, x + w, y);
			} else {

			}

		}
	}
	console.log(h);
}
