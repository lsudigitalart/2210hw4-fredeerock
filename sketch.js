var doonce = 1;

function setup() {

}

function draw() {
  if(doonce == 1) {
    println("hi");
    doonce = 0;
  }
}
