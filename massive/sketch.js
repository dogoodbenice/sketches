var slider;
var slider2;
var starposx = [];
var starposy = [];
function setup() {
  createCanvas(1100, 450);
  stroke(50);
  fill(0);
  //gravity
  slider = createSlider(0,350,10);
  //mass
  slider2 = createSlider(0,350,30);
  slider.position(40, 150);
  slider.style('width','80px');
  slider2.position(40,180);
  slider2.style('long','80px')
  noStroke();
  for (var i = 0; i < starposx.length; i++) {
    starposx[i] = random(0,1000);
    starposy[i] = random(0,400);
  }
}
function draw() {
  background(0);
  stars();
  var gravity = slider.value();
  var mass = slider2.value();
  //planet
  fill(255,(30+gravity)/2,50+mass);
  ellipse(600,230,(gravity*10),(gravity*10));
  //labels
  fill(255);
  textSize(20);
  text("Gravity strength (N/kg)",115,35);
  text("Your mass(Kg)",200,65);
  fill(20,140,255);
  text(gravity,330,35);
  text(mass,350,65);
  //person
  fill(255);
  ellipse(600,180,mass/10,mass/10);
  fill(255);
  //text(val,395,348);
  fill(255);
  textSize(35);
  text('Your',50,200);
  text('weight is',50,240);
  //or
  text('Or',50,320);
  fill(20,140,255);
  text((mass*gravity)+" Newtons",50,280);
  text("~"+round((mass*gravity)/9.81)+ " Kilograms",50,360);
}
function stars() {
  fill(255,255,255);
  for (var i = 0; i < 1000; i++) {
    ellipse(starposx[i],starposy[i],20,20);
  }
}
