//Variables for designs and bag
var bag;
var designchoice;
var design1;
var design2;
var design3;
var design4;
var design5;
var words = ['Hello','Hi','Yes','Positive','Vote'];
var numbers = ['#','^','£','$','+'];
var content1,content2;

//setup the canvas and designs
function setup() {
  createCanvas(1000,450);
  rectMode(CENTER);
  noStroke();
  bag = new tote();
  design1 = new trdesign();
  design2 = new circdesign();
  design3 = new rectdesign();
  design3 = new rcdesign();
  design4 = new tcdesign();
  design5 = new combidesign();
}
//draw bag and apply a design
function draw() {
    designchoice = int(random(0,5));
    background(125);
    bag.display();
    //design choices
    if (designchoice == 0){
      design1.display();
    }
    if (designchoice == 1){
      design2.display();
    }
    if (designchoice == 2){
      design3.display();
    }
    if (designchoice == 3){
      design4.display();
    }
    if (designchoice == 4){
      design5.display();
    }
    noLoop();
    print(designchoice);
    print('mouseX is ' + mouseX);
    print('mouseY is ' + mouseY);
}

function tote(){
  this.display = function(){
    //bag shadow
    fill(135,137,123);
    rect((width/2)+5,(height/1.5)+5,200,250);
    //bag
    fill(242,255,162);
    rect(width/2,height/1.5,200,250);
    //handle shadow
    fill(135,137,123);
    rect((width/2)+55,(height/3.1),15,60);
    rect((width/2)-45,(height/3.1),15,60);
    rect((503),(height/5.05),94,15);
    triangle(443,112.5,461,80,462.5,116);
    triangle(545,118,549,80,562,116);
    //handle
    fill(242,255,162);
    rect((width/2)+50,(height/3.1),15,66);
    rect((width/2)-50,(height/3.1),15,66);
    rect((width/2),(height/5.05),89,15);
    triangle(443,112.5,457,80,457,112.5);
    triangle(543,112.5,543,80,557,112.5);
    fill(135,137,123);
  };
}

function circdesign(){
  this.display = function(){
    push();
    var width = random(80,100);
    noFill();
    ellipseMode(CENTER);
    stroke(random(10,50),random(140),255);
    strokeWeight(int(random(5,6)));
    ellipse(500,300,150,150);
    //fill(130,random(145,255),100);
    ellipse(500,300,width,width);
    //fill(random(20,80),random(145,255),255);
    stroke(255,random(140),255);
    ellipse(500,300,width-40,width-40);
    fill(255,random(100,255),255);
    ellipse(500,300,width/2,width/2);
    noStroke();
    fill(255);
    textSize(25);
    content2 = numbers[int(random(0,numbers.length))];
    text(content2,494,311);
    pop();
  };
}

function trdesign(){
  this.display = function(){
    push();
    noFill();
    stroke(int(random(0,255)),random(255),255);
    strokeWeight(int(random(0,10)));
    strokeWeight(int(random(0,10)));
    triangle(random(430,450),375,430,random(200,220),520,375);
    triangle(random(480,500),375,500,random(200,200),580,375);
    triangle(random(430,550),245,485,300,random(500,545),245);
    pop();
  };
}

function rectdesign(){
  this.display = function(){
    push();
    rectMode(CENTER);
    fill(int(random(30,255)),int(random(30,255),255));
    stroke(255);
    strokeWeight(int(random(0,10)));
    rect(500,300,150,150);
    fill(int(random(30,255)),int(random(30,255),255));
    strokeWeight(int(random(0,10)));
    rect(500,300,100,100);
    rect(500,300,75,75);
    fill(int(random(30,255)),int(random(30,255),255));
    strokeWeight(int(random(0,10)));
    rect(500,300,25,25);
    rect(500,300,random(2),random(2));
    pop();
  };
}

function rcdesign(){
  this.display = function(){
    push();
    noFill();
    ellipseMode(CENTER);
    stroke(int(random(0,255)),random(255),255);
    strokeWeight(int(random(5,10)));
    ellipse(500,300,100,100);
    strokeWeight(int(random(5,10)));
    stroke(int(random(0,255)),random(255),255);
    ellipse(500,300,50,50);
    strokeWeight(2);
    ellipse(500,300,25,25);
    rectMode(CENTER);
    stroke(int(random(0,255)),random(255),255);
    strokeWeight(int(random(5,10)));
    rect(500,300,150,150);
    pop();
  };
}
function tcdesign(){
  this.display = function(){
    push();
    textSize(30);
    textAlign(CENTER);
    fill(random(0,255),int(random(0,255)),255);
    content = words[int(random(0,words.length))];
    text(content,500,310);
    noFill();
    stroke(random(40,255),random(80,255),255);
    strokeWeight(4);
    rect(500,300,150,150);
    rect(500,300,150,50);
    pop();
  };
}
function  combidesign(){
  this.display = function(){
    push();
    var width = random(20,90);
    var tpos = random(300,375);
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500,300,180,200);
    noFill();
    triangle(430,tpos,500,random(225,300),580,tpos);
    ellipse(500,random(300,350),width,width);
    pop();
  };
}

function mousePressed(){
  redraw();
}
