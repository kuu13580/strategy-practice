function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill("#ffffff");
    console.log("press");
    // } else {
    //  fill("#ff00ff");
  }
  ellipse(mouseX, mouseY, 80, 80);
}