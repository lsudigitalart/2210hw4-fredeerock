function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw() {
  if(mouseX < width/2){
    fill(255, 45, 32);
    ellipse(width/2, height/2, 100);
  }

  if(mouseX > width/2) {
    fill(0, 45, 232);
    ellipse(width/2, height/2, 100);
  }
}

function mouseReleased() {
  background(0, 255, 0);
}

function mousePressed() {
  background(255, 0, 0);
}
