var size;
var label1,label2,l1,l2;

function setup() {
 createCanvas(1000,450);
 background(0);
 size = 10;
 stroke(255);
 textSize(20);
 noFill();
}
function draw() {
}
function mousePressed(){
  background(0);
  fill(255);
  strokeWeight(3);
  line(150, 350, 150, 75);
  line(150, 350, 900, 350);
  triangle(140,75,150,65,160,75);
  triangle(900,340,910,350,900,360);
  strokeWeight(1);
  var label1 = ['Time','Length','Hair','Carbon','Alcohol','Rhythm','Blockchain','Tax','People','Cars','Cheese','Puppies','Kittens'];
  var label2 = ['Coffee', 'Meat', 'Pizza', 'Toilets','Trees','A.I','Books','Sweets','Music','Money','Time'];
  var l1 = random(label1);
  text(l1, 35, 200);
  var l2 = random(label2);
  text(l2, 500, 400);
  noFill();
  for (var i = 0; i < 45; i++){
  ellipse(random(200,850),random(110,260),size,size);
	}
}

function keyPressed(){
     background(0);
  }


