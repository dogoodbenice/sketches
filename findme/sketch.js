var mousePos,pos,target,vel,ctx,rad,drag,speed,textypos,textxpos, ntext, nteyt, targetsize;
let notmes = [];

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noStroke();
  textSize(50);
  //Movement
  mousePos = createVector(0,0);
  pos = createVector(0,0);
  target = createVector(0,0);
  vel = createVector(0,0);
  drag = 0.80; //need to take some force away, 1 = no drag
  strength = 0.05; // the "strength" of the spring, out of 1
  r = 100;
  //object of the game
  textypos = random(100,500)
  textxpos = random(100,1000);
  targetsize = 100;
  for (var i = 0; i < 25; i++) {
    notmes[i] = new notme;
  }
  print(textxpos);
  print(textypos);
}

function draw() {
  // our background changes();
  if (mouseX <= textxpos-40 || mouseX >= textxpos+120 || mouseY <= textypos-80 || mouseY >=textypos+50) {
    background(0);
  } else {
    background(20,255,55);
  }
  //our torch
  mousePos.set(mouseX, mouseY);
  target = mousePos;
  var force = p5.Vector.sub(target, pos);
  force = force.mult(strength);
  vel = vel.mult(drag);
  vel = vel.add(force);
  pos = pos.add(vel);
  ellipse(pos.x, pos.y, r);
  //the object to find
  text('ME!',textxpos,textypos);
  //not the object to find
  for (var i = 0; i < notmes.length; i++) {
    notmes[i].show();
  }
}

class notme {
  constructor() {
    this.ntext = random(0,1500);
    this.nteyt = random(0,900);
  }
  show(){
    textSize(40);
    text('NOPE',this.ntext,this.nteyt);
  }
}
