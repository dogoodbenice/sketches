let slider;
let earlyYears, laterYears;

function setup() {
  createCanvas(1000, 450);
  slider = createSlider(0,250,0);
  slider.position(40, 150);
  slider.style('width','250px');
  noStroke();
}

function draw() {
  textSize(40);
  fill(255);

  let myAge = slider.value();
  background(myAge/2,20,255);

  earlyYears = 2;
  earlyYears *= 10.5;

  laterYears = myAge-2;
  laterYears *= 4;

  myAgeInDogYears = earlyYears+laterYears

  text('You are ' + myAge + ' years old in human years',200,100);
  text('Which is ' + myAgeInDogYears + ' in dog years',200,180);
  text('🦮🐕🐩🐕‍🦺',200,200);
}
