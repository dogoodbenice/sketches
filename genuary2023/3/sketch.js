let glitch;

//select a random number to be used to select a random gif
function getRandomInt() {
	return Math.floor(Math.random() * 4);
  }

function setup() {
	createCanvas(window.innerWidth-200, window.innerHeight-300);
	glitch = new Glitch();
	glitch.loadType('jpg')
	let randomGifslection = getRandomInt()
	console.log(randomGifslection)

	if (randomGifslection === 0){
		glitch.loadImage('./gifs/A.gif')
	} else if (randomGifslection === 1){
		glitch.loadImage('./gifs/A.jpg')
	} else if (randomGifslection === 2){
		glitch.loadImage('./gifs/C.gif')
	} else if (randomGifslection === 3){ 
		glitch.loadImage('./gifs/A.jpg')
	}
	imageMode(CENTER)
}

function draw() {
	glitch.resetBytes(); // reset bytes to original each draw cycle

	// see w/ 10 random bytes
	glitch.randomBytes(10);
	glitch.buildImage(function(img) {
		background(0); // background on demand of first image ready
		image(img, width / 2, height * .25)
	});


	// see w/ additional 100 random bytes
	glitch.randomBytes(100);
	glitch.buildImage(function(img) {
		image(img, width / 2, height * .5)
	});

	// reset + swap hex strings
	glitch.resetBytes();
	glitch.replaceHex('ffdb00430001', 'ffdb004300ff');
	glitch.buildImage(function(img) {
		image(img, width / 2, height * .5)
	});

}