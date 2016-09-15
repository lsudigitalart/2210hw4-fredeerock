var ed = 100;
var ex = 150;
var ey = 200;

var rx = 300;
var ry = ey;
var rw = ed;
var rh = ed;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(100);

  var mdist = dist(mouseX, mouseY, ex, ey);

  if(mdist < ed/2){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(ex, ey, ed);

  if(mouseX > rx && mouseY < ry + rh && mouseX < rx + rw && mouseY > ry) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  rect(rx, ry, rw, rh);

  println("mx:", mouseX, "my:", mouseY, rx, ry )
  rectMode(CORNER);
}

function mouseReleased() {
  background(0, 255, 0);
}

function mousePressed() {
  background(255, 0, 0);
}
