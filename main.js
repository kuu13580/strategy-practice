let height = 80;
let width = 80;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  // if (mouseIsPressed) {
  //   rect(mouseX-40, mouseY-40, 80, 80);
  //   fill("#ffffff");
  //   console.log("press");
  // }
}

function mousePressed(){
  rect(mouseX-(width / 2), mouseY-(height / 2), width, height);
  fill("#ffffff");
}