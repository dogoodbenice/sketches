function setup() {
createCanvas(1000,450);
noStroke();
background(255,255,255);
rectMode(CENTER);
}

function draw() {
   if (keyPressed){
    fill(255,255,255);
   }
  
}

function mouseIsPressed(){
fill(0,255,0);
triangle(mouseX-30,mouseY-20,mouseX,mouseY-70,mouseX+30,mouseY-20);
fill(100,81,14);	
rect(mouseX,mouseY,10,50);
}



