var ex = 100;
var ey = 100;
var ed = 100;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150);

  var mdist = dist(mouseX, mouseY, ex, ey);

  if (mdist < ed/2) {
    fill(255);
  } else {
    fill(0);
  }

  ellipse(ex, ey, ed);

  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
    }
    if(key == "a"){
      println("left");
    }
    if(key == "d"){
      println("right");
    }
    if(key == "s"){
      println("back");
    }
  }

}
