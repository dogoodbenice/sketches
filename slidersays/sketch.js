var slider;
var slider2;

function setup() {
  createCanvas(1000, 450);
  stroke(50);
  fill(0);
  slider = createSlider(0,255,100);
  slider2 = createSlider(0,255,100);
  slider.position(40, 150);
  slider.style('width','80px');
  slider2.position(40,180);
  slider2.style('wdith','80px')
  noStroke();

}

function draw() {
  var val = slider.value();
  var val2 = slider2.value();
  background(val,val2,255);
  fill(0);
  textSize(80);
  text('Slider',400,100);
  text('Slider',400,105);
  text('says',400,200);
  text('says',400,205);
  fill(val,val2,255);
  text('Slider',394,99);
  text('says',394,199);
  fill(0);
  textSize(100);
  text(val,400,350);
  text(val,405,355);
  fill(val,val2,255);
  textSize(100);
  text(val,395,348);
}
