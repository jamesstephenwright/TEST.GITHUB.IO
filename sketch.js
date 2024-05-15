var canvas;  
var mic;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = creativeCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  mic = new p5.AudioIn();
  mic.start();
}  

function draw() {
  background(175);
  var vol = mic.getLevel();
  ellipse(width/2, height/2, vol*width);
} 