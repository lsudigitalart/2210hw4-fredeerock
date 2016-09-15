var ex1 = 100;
var ey1 = 100;
var cstate1 = 1;

var ex2 = 100;
var ey2 = 100;
var cstate2 = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(100);

  if(mouseIsPressed) {
    if(cstate1 == 1) {
      ex1 = mouseX;
      ey1 = mouseY;
      // cstate1 = 0;
      cstate2 = 1;
    }

    if(cstate2 == 1) {
      ex2 = mouseX;
      ey2 = mouseY;
      cstate2 = 0;
    }
  }
    if(cstate1 == 1) {
      ellipse (ex1, ey1, 100);
    }

    if(cstate2 == 1) {
      ellipse (ex2, ey2, 200);
    }


}
