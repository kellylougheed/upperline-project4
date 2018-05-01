var BOX_WIDTH = 100;
var WIDTH = 500;
var HEIGHT = 400;

var x = Math.floor(Math.random() * (WIDTH - BOX_WIDTH));
var y = Math.floor(Math.random() * (HEIGHT - BOX_WIDTH));
var xChange = 2;
var yChange = 2;

var colors;
var c;
var sound;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  colors = [color(255, 0, 0), 
            color(0, 255, 0), 
            color(0, 0, 255),
            color(255, 0, 255),
            color(0, 255, 255),
            color(255, 255, 0),
           ];
  c = colors[Math.floor(Math.random() * colors.length)];
  sound = loadSound('beep.mp3');
}

function draw() {
  background(0);
	x += xChange;
	y += yChange;
	if (x + xChange < 0 || x + xChange > WIDTH - BOX_WIDTH) {
		xChange *= -1;
    colorAndSound();
  }
	if (y + yChange < 0 || y + yChange > HEIGHT - BOX_WIDTH) {
    yChange *= -1;
    colorAndSound();
	}
	fill(c);
	noStroke();
	rect(x, y, BOX_WIDTH, BOX_WIDTH);
  fill(0);
  textSize(36);
  text("DVD", x + (BOX_WIDTH*0.15), y + (BOX_WIDTH*0.6));
}

function colorAndSound() {
  c = colors[Math.floor(Math.random() * colors.length)];
  sound.setVolume(0.1);
  sound.play();
}