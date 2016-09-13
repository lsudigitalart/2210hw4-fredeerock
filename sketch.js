var v;

function setup() {
  v = 100;
  createCanvas(640, 480);
  noCursor();
  smooth();
  stroke(255);
  // noStroke();
  background(255, 0, 0);

}

function draw() {
  var mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(10);
  background(255, map(mouseDist, 0, 70, 0, 255), map(mouseDist, 0, 70, 0, 255)-mouseX, 5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  // ellipse(mouseX, mouseY, 20);
  println(mouseDist);
}
