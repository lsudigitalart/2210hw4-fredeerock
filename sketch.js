var ex = 100;
var ey = 100;
var ed = 100;
var speed = 10;
var ts = "find it";

var score = 0;
var doonce = 1;

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 100;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150, 100);

  textSize(32);
  text(score, width/2, 32);

  textSize(32);
  text(ts, width/2, height/2);
  ellipse(ex, ey, ed);

  if(ex+50 > rx && ex < rx + rw + 50 && ey < ry + rh + 50 && ey+50 > ry) {
    background(255, 0, 0, 100);
    ts = "found it";
    if(doonce == 1){
      score++;
      doonce = 0;
    }
  } else {
    background(0, 255, 0, 100);
    ts = "find it";
    doonce = 1;
  }

  rect(rx, ry, rw, rh);

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
