var profile;
var proffesion = ['lawyer','doctor','sailor','baker','actor','writer','painter', 'alchemist', 'armourer','banker','candle maker', 'fruiterer','politician','farmer'];
var adjective = ['Quirky','Smelly','Decent','Earnest','Faithful','Happy','Idealistic','Keen','Splendid','Vigilant','Zealous','Unsavory','Resilient','Crude','Delightful','Disdainful','Dynamic','Ignorant'];

function preload(){
  //FOREHEADS
  forehead1 = loadImage("assets/foreheads/1.png");
  forehead2 = loadImage("assets/foreheads/2.png");
  forehead3 = loadImage("assets/foreheads/3.png");
  forehead4 = loadImage("assets/foreheads/4.png");
  forehead5 = loadImage("assets/foreheads/5.png");
  forehead6 = loadImage("assets/foreheads/6.png");
  //FACES
  face1 = loadImage("assets/faces/1.png");
  face2 = loadImage("assets/faces/2.png");
  face3 = loadImage("assets/faces/3.png");
  face4 = loadImage("assets/faces/4.png");
  face5 = loadImage("assets/faces/5.png");
  face6 = loadImage("assets/faces/6.png");
  //SHOULDERS
  shoulders1 = loadImage("assets/shoulders/1.png");
  shoulders2 = loadImage("assets/shoulders/2.png");
  shoulders3 = loadImage("assets/shoulders/3.png");
  shoulders4 = loadImage("assets/shoulders/4.png");
  shoulders5 = loadImage("assets/shoulders/5.png");
  shoulders6 = loadImage("assets/shoulders/6.png");
  profile = int(random(1,17));
  print(profile);
}

function setup() {
  createCanvas(600,600);
  background(0);
  var profilesuggestion = 'The ' + random(adjective) + ' ' + random(proffesion);
  fill(255);
  text(profilesuggestion, 300,500);
  if (profile == 1) {
    profilemaker1();
  } else if (profile == 2) {
    profilemaker2();
  } else if (profile == 3) {
    profilemaker3();
  }else if (profile == 4) {
    profilemaker4();
  } else if (profile == 5) {
  profilemaker5();
  } else if (profile == 6) {
  profilemaker6();
  } else if (profile == 7) {
  profilemaker7();
  } else if (profile == 8) {
  profilemaker8();
  } else if (profile == 9) {
  profilemaker9();
  } else if (profile == 10) {
  profilemaker10();
  } else if (profile == 11) {
  profilemaker11();
  } else if (profile == 12) {
  profilemaker12();
  } else if (profile == 13) {
  profilemaker13();
  } else if (profile == 14) {
  profilemaker14();
  } else if (profile == 15) {
  profilemaker15();
  } else if (profile == 16) {
  profilemaker16();
  }
}

function draw() {
}

function profilemaker1(){
  //FOREHEAD
  image(forehead1,width/2,200);
  //FACES
  image(face2,width/2,300);
  //SHOULDERS
  image(shoulders4,width/2,400);
}

function profilemaker2(){
  //FOREHEAD
image(forehead6,width/2,200);
//FACES
image(face4,width/2,300);
//SHOULDERS
image(shoulders5,width/2,400);
}

function profilemaker3(){
  //FOREHEAD
image(forehead1,width/2,200);
//FACES
image(face1,width/2,300);
//SHOULDERS
image(shoulders2,width/2,400);
}

function profilemaker4(){
  //FOREHEAD
image(forehead6,width/2,200);
//FACES
image(face5,width/2,300);
//SHOULDERS
image(shoulders4,width/2,400);
}

function profilemaker5(){
  //FOREHEAD
image(forehead3,width/2,200);
//FACES
image(face6,width/2,300);
//SHOULDERS
image(shoulders4,width/2,400);
}

function profilemaker6(){
  //FOREHEAD
image(forehead3,width/2,200);
//FACES
image(face6,width/2,300);
//SHOULDERS
image(shoulders1,width/2,400);
}

function profilemaker7(){
  //FOREHEAD
image(forehead6,width/2,200);
//FACES
image(face3,width/2,300);
//SHOULDERS
image(shoulders4,width/2,400);
}
function profilemaker8(){
  //FOREHEAD
image(forehead2,width/2,200);
//FACES
image(face5,width/2,300);
//SHOULDERS
image(shoulders3,width/2,400);
}
function profilemaker9(){
  //FOREHEAD
image(forehead3,width/2,200);
//FACES
image(face2,width/2,300);
//SHOULDERS
image(shoulders1,width/2,400);
}
function profilemaker10(){
  //FOREHEAD
image(forehead2,width/2,200);
//FACES
image(face5,width/2,300);
//SHOULDERS
image(shoulders6,width/2,400);
}
function profilemaker11(){
  //FOREHEAD
image(forehead3,width/2,200);
//FACES
image(face4,width/2,300);
//SHOULDERS
image(shoulders6,width/2,400);
}
function profilemaker12(){
  //FOREHEAD
image(forehead3,width/2,200);
//FACES
image(face1,width/2,300);
//SHOULDERS
image(shoulders2,width/2,400);
}
function profilemaker13(){
  //FOREHEAD
image(forehead4,width/2,200);
//FACES
image(face2,width/2,300);
//SHOULDERS
image(shoulders5,width/2,400);
}
function profilemaker14(){
  //FOREHEAD
image(forehead4,width/2,200);
//FACES
image(face3,width/2,300);
//SHOULDERS
image(shoulders2,width/2,400);
}
function profilemaker15(){
  //FOREHEAD
image(forehead4,width/2,200);
//FACES
image(face2,width/2,300);
//SHOULDERS
image(shoulders3,width/2,400);
}
function profilemaker16(){
  //FOREHEAD
image(forehead2,width/2,200);
//FACES
image(face1,width/2,300);
//SHOULDERS
image(shoulders5,width/2,400);
}
