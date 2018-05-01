function setup() {
createCanvas(1000,450);
noStroke();
background(79, 121, 66);
rectMode(CENTER);
}

function draw() {
if (keyIsPressed === true){
    background(79, 121, 66);
}
}

function mousePressed(){
fill(0,255,0);
triangle(mouseX-30,mouseY-20,mouseX,mouseY-70,mouseX+30,mouseY-20);
fill(100,81,14);	
rect(mouseX,mouseY,10,50);
}



