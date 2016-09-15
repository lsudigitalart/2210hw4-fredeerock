function setup() {
  createCanvas(640, 480);

}

function draw() {
  background(150);
  // if(mouseX < width/2){
  //   fill(255, 45, 32);
  //   ellipse(width/2, height/2, 100);
  // }
  //
  // if(mouseX > width/2) {
  //   fill(0, 45, 232);
  //   ellipse(width/2, height/2, 100);
  // }

  var mdist = dist(mouseX, mouseY, width/2, height/2);

  if (mdist < 100/2) {
    fill(255);
  } else {
    fill(0);
  }

  ellipse(width/2, height/2, 100);

}

function mouseReleased() {
  background(0, 255, 0);
}

function mousePressed() {
  background(255, 0, 0);
}
