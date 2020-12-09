var status;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  loadJSON('https://api.tfl.gov.uk/line/mode/tube/status?app_key=82be694bea65b6165cf84c3f5ff28bc5&app_id=3180a36a')
}

function gotData(data) {
  println(data);
  status = data;
}

function draw() {
  background(0);
  if (status) {
    ;
  }
}

function mouseClicked() {

}
