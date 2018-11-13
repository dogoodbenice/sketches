var ropelength,xpos,ylimit,extension,cloudpos1,cloudpos2,cloudpos3;
var extend = true;
var contraction = false;
var amount = 6;
function setup() {
	createCanvas(1200,450);
	rectMode(CENTER);
	xPos = 500;
	extension = 0;
	cloudpos1 = 80;
	cloudpos2 = 800;
	cloudpos3 = random(0,1200);
	cloudpos4 = random(0,1200);
}
function draw(){
	//variables
	ylimit = mouseY;
	xlimit = mouseX;
	//controls on spaces
	if (xlimit > 1200){
		xlimit = 1200;
	}
	if (xlimit <0){
		xlimit = 0;
	}
	if (ylimit > 300) {
		ylimit = 300;
	}
	//controlling the correction for counterweight
	if(mouseX > 500){
		var correction = +700;
		} else if (mouseY > 0) {
		var correction = -500;
		}
	//controlling the extension
	if (extension > 80) {
		extend = true;
	}
	else {
		contraction = true;
	}
	ropelength = 200+ylimit;
	background(8,150,255);
	//clouds and movement
	cloudpos1 = cloudpos1 + 0.1;
	cloudpos2 = cloudpos2 + 0.5;
	cloudpos3 = cloudpos3 + 0.05;
	cloudpos4 = cloudpos4 + 0.2;
	if (cloudpos1 > 1300) {
		cloudpos1 = -20;
	}
	if (cloudpos2 > 1300) {
		cloudpos2 = -20;
	}
	if (cloudpos3 > 1300) {
		cloudpos3 = -20;
	}
	if (cloudpos4 > 1300) {
		cloudpos4 = -20;
	}
	cloud(cloudpos1,50);
	cloud(cloudpos2,50);
	cloud(cloudpos3,50);
	cloud(cloudpos4,50);
	//hand crane/structure
	stroke(0);
	line(xlimit,ylimit,mouseX,ropelength+extension);
	noFill();
	strokeWeight(5);
	triangle(xPos,180,xlimit,ylimit,xPos,100);
	//counterweight
	triangle(xPos,180,width-mouseX,(height-mouseY)-200,xPos,100);
	fill(255,210,7);
	rect(width-mouseX,(height-mouseY)-200,40,40);
	ellipse(xPos,100,25,25);
	//pulley
	push();
	fill(0);
	strokeWeight(6);
	ellipse(xlimit,ylimit,20,20);
	pop();
	//crane body
	fill(255,210,7);
	stroke(0);
	rect(xPos,400,30,400);
	rect(xPos,180,80,70);
	//window
	fill(255);
	rect(xPos+10,180,60,40);
	//stuff
	rect(xlimit,ropelength+extension,100,100);
}
function mousePressed() {
	if (extend == true) {
 	 	extension = extension + 5;
	}
	if (contraction == true) {
		extension = extension - 5;
	}
	extension = random(0,100);
}

function cloud(x,y) {
	ellipse(x,y-10,110,50);
	arc(x-30,y,50,50,50,PI+QUARTER_PI,OPEN);
	arc(x,50,y,50,50,PI+QUARTER_PI,OPEN);
	arc(x+30,y,50,50,50,PI+QUARTER_PI,OPEN);
}
