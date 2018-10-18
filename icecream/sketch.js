var x1 = [];
var y1 = [];
var x2 = [];
var y2 = [];
var x3 = [];
var y3 = [];
var amount = 15;
function setup() {
	createCanvas(1200,400);
	noStroke();
	frameRate(10);
	fill(0);
	rectMode(CENTER);
}
function draw(){
	for (var i = 0; i < amount; i++) {
		x1[i] = random(0,1000);
		y1[i] = random(0,400);
		x2[i] = random(0,800);
		y2[i] = random(20,500);
		x3[i] = random(5,1100);
		y3[i] = random(60,350);
	}
}
function mousePressed() {
		background(255);
		for (var i = 0; i < x1.length; i++) {
			for (var i = 0; i < y1.length; i++) {
				icecream1(x1[i],y1[i],20);
				icecream2(x2[i],y2[i],20,5);
				icecream3(x3[i],y3[i],25);
			}
		}
}
function icecream1(x,y,diam) {
	fill(255,186,45);
	rect(x,y+20,diam-15,diam+15);
	fill(random(10,140),random(20,255),random(50,140));
	ellipse(x,y,diam,diam);
	fill(random(20,255),random(40,140),random(50,140));
	ellipse(x,y+10,diam,diam);
	fill(random(50,140),random(50,140),random(20,255));
	ellipse(x,y+20,diam,diam);
}
function icecream2(x,y,diam,round){
	fill(255,186,45);
	rect(x,y+30,diam-15,diam+15);
	fill(random(10,255),10,random(20,40));
	rect(x, y+10, diam,diam,round);
	fill(random(5,60),255,random(20,200));
	rect(x, y+20, diam,diam,round);
	fill(random(10,200),random(10,50),255);
	rect(x, y+30, diam,diam,round);
}
function icecream3(x,y,diam){
	fill(random(200,255),random(10,20),10);
	ellipse(x+15,y-25,diam-15,diam-15);
	fill(random(200,255),random(10,200),255);
	ellipse(x+15,y-15,diam-5,diam-5);
	fill(255,186,255);
	ellipse(x+15,y-5,diam,diam);
	fill(255,186,45);
	triangle(x,y,x+30,y,x+15,y+30);
}
