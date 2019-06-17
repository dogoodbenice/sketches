var aslider,bslider,cslider,savebutton;

function setup() {
  let c = createCanvas(window.innerWidth,window.innerHeight);
  aslider = createSlider(0, 255, 255);
  bslider = createSlider(0, 255, 100);
  cslider = createSlider(0, 255, 100);
  aslider.position(15, 130);
  bslider.position(105,130);
  cslider.position(200, 130);
  aslider.style('width', '80px');
  bslider.style('width', '80px');
  cslider.style('width', '80px');
  noStroke()
  //savebutton
  savebutton = createButton('Download');
  savebutton.position(300,130);
  savebutton.mousePressed(savingpalette);
}

function savingpalette() {
  save('my_Pulled_pallete.png');
}

function draw() {
  var aval = aslider.value();
  var bval = aslider.value();
  var cval = aslider.value();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++)
      fill(random(0,aval),random(0,bval),random(0,cval));
      rect(mouseX+(j),200+(125*i),100,100);
      // rect(250,0+(150*i),100,100);
      // rect(400,0+(150*i),100,100);
    }
  print(mouseX);
}
