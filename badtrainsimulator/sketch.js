var posX;
var posY;
var change;
var posy;
var y;

function setup() {
createCanvas(1000,450);
noStroke();
}

function draw() {
background(0);
  var posX = mouseX;
  var posY = 10;
  var posy = 110; 
  var y= 210;
  var z= 310;
  var c= 410;
  var change = 120;
  var rwidth = 100;
  var rh = 60;
    
  fill(0, 168, 255);
  rect(posX-change*9, posY, rwidth*2, 60);
  rect(posX-change*8, posY, rwidth, 60);
  rect(posX-change*7, posY, rwidth, 60);
  rect(posX-change*6, posY, rwidth, 60);
  rect(posX-change*5, posY, rwidth, 60);
  fill(232, 65, 24);
  rect(posX-change*2, posY, rwidth, 60); 
  rect(posX-change*4, posY, rwidth, 60);
  fill(76, 209, 55);
  rect(posX-change, posY, rwidth*2, 60); 
  rect(posX, posY, rwidth, 60); 
  fill(156, 136, 255);
  rect(posX+change, posY, rwidth, 60); 
  rect(posX+change*3, posY, rwidth, 60); 
  rect(posX+change*4, posY, rwidth, 60);
  rect(posX+change*5, posY, rwidth, 60); 
  fill(76, 209, 55);
  rect(posX+change*6, posY, rwidth, 60);
  rect(posX+change*7, posY, rwidth, 60); 
  rect(posX+change*8, posY, rwidth*2, 60);
  fill(76, 209, 55);  
  rect(posX-change*9, posY, rwidth, 60);
  rect(posX-change*8, posY, rwidth, 60);
  rect(posX-change*7, posY, rwidth, 60);
  rect(posX-change*9, y, rwidth, 60);
  rect(posX-change*8, y, rwidth, 60);
  fill(156, 136, 255);
  rect(posX-change*7, y, rwidth, 60);
  rect(posX-change*6, y, rwidth, 60);
  rect(posX-change*5, y, rwidth, 60);
  rect(posX-change*6, y, rwidth, 60);
  rect(posX-change*5, y, rwidth, 60);
  fill(251, 197, 49);
  rect(posX-change*2, posy, rwidth, 60); 
  rect(posX-change*4, posy, rwidth, 60);
    fill(76, 209, 55);
  rect(posX+change*6, posY, rwidth, 60);
  rect(posX+change*7, posY, rwidth*2, 60); 
  rect(posX+change*8, posY, rwidth, 60);
  fill(39, 60, 117);
  rect(posX-change, posy, rwidth, 60); 
  rect(posX, posy, rwidth, 60); 
  rect(posX+change*2, posy, rwidth, 60); 
  rect(posX+change*3, posy, rwidth, 60); 
  fill(213, 36, 237);
  rect(posX+change*4, posy, rwidth, 60);
  rect(posX+change*6, posY, rwidth, 60);
  fill(213, 36, 237);
  rect(posX+change*7, posY, rwidth, 60); 
  rect(posX+change*8, posY, rwidth, 60);
  fill(0, 151, 230);  
  rect(posX-change*9, posY, rwidth, 60);
  rect(posX-change*8, posY, rwidth, 60);
  rect(posX-change*7, posY, rwidth, 60);
  rect(posX-change*6, posY, rwidth, 60);
  rect(posX-change*5, y, rwidth, 60);
  fill(213, 36, 237);
  rect(posX-change*3, y, rwidth, 60); 
  rect(posX-change*4, y, rwidth, 60);
  rect(posX-change, y, rwidth, 60); 
    fill(0, 168, 255);
   rect(posX+change*2, y, rwidth, 60); 
  rect(posX+change*3, y, rwidth, 60);
  rect(posX+change*4, y, rwidth, 60); 
    fill(213, 36, 237);
  rect(posX+change*5, y, rwidth, 60);
  rect(posX+change*6, y, rwidth, 60); 
  rect(posX+change*7, y, rwidth, 60);
    fill(213, 36, 237);
   rect(posX-change*9, z, rwidth, 60);
  rect(posX-change*8, z, rwidth, 60);
  rect(posX-change*7, z, rwidth, 60);
   fill(0, 168, 255);
  rect(posX-change*6, z, rwidth, 60);
  rect(posX-change*5, z, rwidth, 60);
  rect(posX, z, rwidth, 60); 
  rect(posX+change, z, rwidth, 60);
  fill(72, 126, 176);
  rect(posX+change*2, z, rwidth, 60); 
  rect(posX+change*3, z, rwidth, 60);
  rect(posX+change*4, z, rwidth, 60); 
  fill(220, 221, 225);
  rect(posX+change*5, z, rwidth*2, 60);
  rect(posX+change*6, z, rwidth, 60); 
  rect(posX+change*7, z, rwidth, 60);
  fill(232, 65, 24);
  rect(posX-change*9, c, rwidth, 60);
  rect(posX-change*8, c, rwidth*2, 60);
  rect(posX-change*7, c, rwidth, 60);
  rect(posX-change*6, c, rwidth, 60);
  rect(posX-change*5, c, rwidth, 60);
  fill(232, 65, 24);
  rect(posX-change*2, c, rwidth, 60); 
  rect(posX-change*4, c, rwidth, 60);
  fill(72, 126, 176);
  rect(posX-change, c, rwidth, 60); 
  rect(posX, c, rwidth, 60); 
 fill(156, 136, 255);
  rect(posX+change, c, rwidth, 60); 
  rect(posX+change*3, c, rwidth, 60); 
  rect(posX+change*5, c, rwidth*2, 60); 
   fill(156, 136, 255);
  rect(posX+change*6, c, rwidth, 60);
  rect(posX+change*7, c, rwidth, 60); 
  rect(posX+change*8, c, rwidth, 60);
  rect(posX+change*9, c, rwidth, 60);
}