var fishX;
var fishY;

function setup() {
createCanvas(1000,450);
noStroke();
}

function draw() {
	var fishX = mouseX;
	var	fishY = mouseY;
	
  background(0, 150, 255); 
  //fish
  fill(0, 255, 255);
  ellipse(fishX, fishY, 150, 50);
  triangle(fishX-110, fishY-30, fishX, fishY, fishX-110, fishY+30);
  //eye
  fill(0, 0, 0);
  ellipse(fishX+50, fishY-5, 15, 15);
  
   if (mouseIsPressed){
    var bubY = mouseY-(random(40,100));
    fill(255,255,255);
    ellipse(fishX+40,bubY,random(1,15),random(1,15));
  }
  
}



