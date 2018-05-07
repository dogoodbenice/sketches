var img,img2,img3,img4,img5,img6,img7,img8,img9,img10;
function preload() {
 img1 = loadImage('images/img2.jpg');
 img2 = loadImage('images/img3.jpg');
 img3 = loadImage('images/img4.jpg');
 img4 = loadImage('images/img19.jpg');
 img5 = loadImage('images/img17.jpg');
 img6 = loadImage('images/img15.jpg');
 img7 = loadImage('images/img4.jpg');
 img8 = loadImage('images/img14.jpg');
 img9 = loadImage('images/img11.jpg');
 img10 = loadImage('images/img10.jpg');
}

function setup() {
 createCanvas(windowWidth-150,600);
 background(255);
}
function draw() {
}

function mousePressed(){
  background(255);
  var images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
  var l1 = random(images);
  image(l1,0,50);
}
