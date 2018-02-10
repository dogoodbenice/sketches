var x = 40;
var xsize = false;


function setup() {
createCanvas(600,600);
background(0);
}

function draw() {
    if(xsize) {
    x = x + 10;
    if (x > 90){
      xsize = false;
    }
  } else {
      x = x - 5;
      if ( x < 10 ){
        xsize = true;
      }
    }
  ellipse(mouseX, mouseY, x,x);
}

function keyPressed(){
background(0);
}
