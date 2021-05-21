function setup() {
	createCanvas(1000, 1000);
	strokeCap(PROJECT);
	rectMode(CENTER);
	grid1();
	//grid2();
}

function mousePressed() {
	grid1();
	//grid2();
}

function keyPressed() {
  saveCanvas('c', 'jpg');
}

function grid1() {
	background('#B8B8FF');
	let w = 50;
	let h = w;

	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows
			noFill();
			stroke(240,246,246);
			strokeWeight(5);
			let shadowspace = 4
			let r = random(4);

			if (r < 1) {
				line(x, y, x + w, y + h);
			} else if (r < 2) {
				// diagonal top-right to bottom-left
				line(x + w, y, x, y + h);
				push()
				translate(shadowspace,shadowspace)
				stroke(66,191,221,200);
				line(x + w, y, x, y + h);
				pop()
				push()
				translate(shadowspace*2,shadowspace*2)
				stroke(66,191,221,100);
				line(x + w, y, x, y + h);
				pop()

			} else if (r < 3)  {
				// straight across top
				line(x, y, x + w, y + h);
				// push()
				// translate(shadowspace,shadowspace)
				// stroke(66,191,221,100);
				// line(x, y, x + w, y + h);
				// pop()
			} else {
				push()
				translate(shadowspace,shadowspace)
				stroke(66,191,221,100);
				ellipse(x,y,15)
				pop()
				ellipse(x,y,15)
			}

		}
	}

}
