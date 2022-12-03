function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
	background(0);
}

function draw() {
  // use Perlin noise to generate a random coordinates
  let y = noise(frameCount * 0.01) * height;
  let x = noise(frameCount * 0.01 + 100) * width;
  let r = noise(frameCount * 0.01 + 200) * 100;
  let x1 = noise(frameCount * 0.01 + 300) * width;
  let x2 = noise(frameCount * 0.01 + 400) * width;
  let x3 = noise(frameCount * 0.01 + 500) * width;
  
  stroke("white");
  fill(0);
  
  for (let i = 0; i < 10; i++) {
    ellipse(x, y, r, r);
    ellipse(x1, y, r, r);
    ellipse(x1, y-x2, r, r);
    ellipse(x1+y, x3-x2, r, r);
    ellipse(x2, x1+20, r-i, r-i);
    ellipse(y, x3+y, r*(i-1), r*(i-1)); 
    ellipse(x, x3+y, r+i, r+i); 
  }

}  

function mousePressed(){
  save('my-anxious-moment.jpg')
}