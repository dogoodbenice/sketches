let glitch, glitch2;
let xpos = 155;

//select a random number to be used to select sampling
function getRandomInt() {
	return Math.floor(Math.random() * 100);
}

function setup() {
	createCanvas(window.innerWidth - 200, window.innerHeight - 300);
	glitch = new Glitch();
	glitch.loadType('jpg')
	glitch.loadImage('https://picsum.photos/200/300')

	glitch2 = new Glitch();
	glitch2.loadType('jpg');
	glitch2.loadType('jpg'); // specify jpeg file glitching, default
	glitch2.loadQuality(.25); // optionally crunch to low quality

	glitch2.loadImage(`https://picsum.photos/200/200`);

	imageMode(CENTER)
	//noLoop();
}

function g2(){
	glitch2.resetBytes(); // reset bytes to original each draw cycle

	glitch2.randomBytes(getRandomInt());
	glitch2.buildImage(function (img) {
		image(img, xpos*4, height * .5)
	});
}

//glitch set
function g1() {
	glitch.resetBytes(); // reset bytes to original each draw cycle

	glitch.randomBytes(getRandomInt());
	glitch.buildImage(function (img) {
		background(0);
		image(img, xpos, height * .5)
	});
	glitch.randomBytes(getRandomInt());
	glitch.buildImage(function (img) {
		image(img, xpos * 2.5, height * .5)
	});
	// glitch.randomBytes(getRandomInt());
	// glitch.buildImage(function (img) {
	// 	image(img, xpos * 4, height * .5)
	// });
	glitch.randomBytes(getRandomInt());
	glitch.buildImage(function (img) {
		image(img, xpos * 5.5, height * .5)
	});
	glitch.randomBytes(getRandomInt());
	glitch.buildImage(function (img) {
		image(img, xpos * 7, height * .5)
		glitch.replaceHex('ffdb00430101', 'ffdb00430155');
	});
}


function draw() {
	g1();
	g2();
}

function keyPressed() {
	// this will download the canvas
	if (key === 's') {
		saveCanvas('myglitchsketch', 'jpg');
	}
}

function mousePressed() {
	noLoop();
}
