function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  ellipse(mouseX, mouseY, 80, 80);
  if (mouseIsPressed) {
    fill("#ffffff");
    console.log("press");
  }
}