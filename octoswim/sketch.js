var GRAVITY = 0.3;
var FLAP = -7;
var GROUND_Y = 500;
var MIN_OPENING = 300;
let timer;
var bird;
var pipes;
var gameOver;
var birdImg, pipeImg, groundImg, bgImg;
var pipecount;


function preload(){
  birdImg = loadImage("https://i.imgur.com/0DoxkAs.png");
  pipeImg = loadImage("https://i.imgur.com/5rbAawR.png");
  //groundImg = loadImage("https://i.imgur.com/KmKSNLa.png");
  bgImg = loadImage("https://i.imgur.com/01y9PD9.png");
}

function setup() {
  createCanvas(500, 600);
  bird = createSprite(width/3, height/3, 40, 40);
  bird.rotateToDirection = true;
  bird.velocity.x = 4;
  bird.setCollider('circle', 0, 0, 40);
  bird.addImage(birdImg);
  //ground = createSprite(800/2, GROUND_Y+100); //image 800x200
  //ground.addImage(groundImg);
  pipes = new Group();
  gameOver = true;
  updateSprites(false);
  camera.position.y = height/2;
  textSize(50);
  fill(255);
}

function draw() {
  if(gameOver && keyWentDown('x'))
    newGame();
  if(!gameOver) {
    if(keyWentDown('x'))
      bird.velocity.y = FLAP;
      bird.velocity.y += GRAVITY;
    if(bird.position.y<0)
      bird.position.y = 0;
    if(bird.position.y+bird.height/2 > 600)
      die();
    if(bird.overlap(pipes))
      die();
    //spawn pipes
    if(frameCount%60 == 0) {
      var pipeH = random(50, 300);
      var pipe = createSprite(bird.position.x + width, GROUND_Y-pipeH/2+1+100, 80, pipeH);
      pipe.addImage(pipeImg);
      pipes.add(pipe);
      //top pipe
      if(pipeH<200) {
        pipeH = height - (height-GROUND_Y)-(pipeH+MIN_OPENING);
        pipe = createSprite(bird.position.x + width, pipeH/2-100, 80, pipeH);
        pipe.mirrorY(-1);
        pipe.addImage(pipeImg);
        pipes.add(pipe);
      }
    }
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer ++;
  }
    //get rid of passed pipes
    for(var i = 0; i<pipes.length; i++)
      if(pipes[i].position.x < bird.position.x-width/2)
        pipes[i].remove();
  }

  camera.position.x = bird.position.x + width/4;

  //wrap ground
  //if(camera.position.x > ground.position.x-ground.width+width/2)
    //ground.position.x+=ground.width;

  background(69, 13, 109);
  camera.off();
  image(bgImg, -10, 450, bgImg*10,bgImg*10);
  image(bgImg, 390, 435, bgImg*10,bgImg*10);
  camera.on();

  drawSprites(pipes);
  drawSprite(bird);
  text("Good Luck!",250,100);

  if (bird.overlap(pipes)) {
    textSize(50);
    text("Game Over",camera.position.x-55,200);
    text(timer, camera.position.x, height/2);
  }
  if(bird.position.y+bird.height/2 > 600){
    textSize(50);
    text("Game Over",camera.position.x-55,200);
    text(timer, camera.position.x, height/2);
  }
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function newGame() {
  pipes.removeSprites();
  gameOver = false;
  timer = 1;
  updateSprites(true);
  bird.position.x = width/2;
  bird.position.y = height/2;
  bird.velocity.y = 0;
  //ground.position.x = 800/2;
  //ground.position.y = GROUND_Y+100;
}

function mouseClicked() {
  if(gameOver)
  newGame();
  bird.velocity.y = FLAP;
}
