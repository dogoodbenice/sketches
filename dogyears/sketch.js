function setup() {
  createCanvas(600, 300);
  noStroke();
  //To set a nice background
  let bgcolor = ['#2980b9','#16a085','#341f97','#c0392b','#34495e'];
  background(random(bgcolor));
  //fortune time
  textSize(20);
  let textpos = 50;
  let texth = 150;
  fill(255);
  let randomNumber = Math.floor(Math.random() * 8);
  let fortune = '';

  switch (randomNumber) {
    case 1:
      fortune = 'Know Where You’re Going';
      text(`${fortune}`, textpos, texth);
      break;
    case 2:
      fortune = 'Take Action';
      text(`${fortune}`, textpos, texth);
      break;
    case 3:
      fortune = 'Successes Are Built On Failures';
      text(`${fortune}`, textpos, texth);
      break;
    case 4:
      fortune = 'Good Friends Are Better Than Lots Of Friends';
      text(`${fortune}`, textpos, texth);
      break;
    case 5:
      fortune = 'Believe In Yourself';
      text(`${fortune}`, textpos, texth);
      break;
    case 6:
      fortune = 'Track What You’re Doing';
      text(`${fortune}`, textpos, texth);
      break;
    case 7:
      fortune = 'Do The Truly Important Things First';
      text(`${fortune}`, textpos, texth);
      break;
    case 8:
      fortune = 'Don’t Be Afraid To Experiment';
      break;
      text(`${fortune}`, textpos, texth);
    default:
      fortune = 'Do ask questions'
      text(`${fortune}`, textpos, texth);
  }
}

function mouseClicked() {
  setup();
}
