// Declare variable for the horizontal position of the circle
let x = 25;
let y = 0;                    //CHANGED

let a = 10;                    //CHANGED
let b = 0;                    //CHANGED

let c = 0;                    //CHANGED
let d = 500;                  //CHANGED
let e = 200;                  //CHANGED

function setup() {
  // Create the canvas
  createCanvas(720, 500);      //CHANGED

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(10);                //CHANGED?

  // No animation to start
  noLoop();
}

function draw() {
  // Clear the background
  background(0);               

  // Draw a circle, with hue determined by frameCount
  fill(x / 5, 90, 90);          //CHANGED
  circle(x, height / 2, y);    //CHANGED
  
  fill(a / 5, 90, 90);          //CHANGED
  circle(a, b, b);              //CHANGED

  fill(c / 10, 90, 90);          //CHANGED
  circle(c, d, e);                //CHANGED
  
  // Increase the x variable by 5
  x += 5;
  y += 1;                      //CHANGED
  
  a += 5;                      //CHANGED
  b += 3;                      //CHANGED
  
  c += 5;                      //CHANGED
  d -= 1;                  //CHANGED
  e -= 1;                    //CHANGED
  // Reset the circle position after it moves off the right side
  if (x > width + 100) {
    x = -55;                  //CHANGED
    y = 0;                    //CHANGED
  }
  
  if (a > width+ 50){          //CHANGED
    a = 0;                    //CHANGED
    b = 0;                    //CHANGED
  }

  if(c > width){                //CHANGED
    c = 100;                    //CHANGED
    d = 500;                    //CHANGED
    e = 200;                    //CHANGED
  }
  describe('circle moving to the right');
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}