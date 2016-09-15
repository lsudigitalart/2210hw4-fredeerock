var ex = 100;
var ey = 100;
var ed = 100;
var speed = 1;

// var rx;
// var ry;
// var rw;

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

  // rect();

  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
      ey-=speed;
    }
    if(key == "a"){
      println("left");
      ex-=speed;
    }
    if(key == "s"){
      println("back");
      ey+=speed;
    }
    if(key == "d"){
      println("right");
      ex+=speed;
    }
    // if(keyCode == SHIFT){
    //   speed = 10;
    // } else {
    //   speed = 1;
    // }
  }
}
