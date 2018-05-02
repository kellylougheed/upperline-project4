var BOX_SIDE = 100;
var WIDTH = 750;
var HEIGHT = 500;

var x;
var y;
var xChange = 2;
var yChange = 2;

var colors;
var c;

var bell;
var ting;
var magic;

var paused = false;

var canvas;
var hue = 0;

function preload() {
    bell = loadSound('Good-idea-bell.mp3');
    ting = loadSound('Ting-sound-effect.mp3');
    magic = loadSound('Magical-chime-sound-effect.mp3');
}

function setup() {
    canvas = false;
    createCanvas(WIDTH, HEIGHT);
    colors = [color(255, 0, 0), 
            color(0, 255, 0), 
            color(0, 0, 255),
            color(255, 0, 255),
            color(0, 255, 255),
            color(255, 255, 0),
            ];
    c = colors[Math.floor(Math.random() * colors.length)];
    x = Math.floor(Math.random() * (WIDTH - BOX_SIDE));
    y = Math.floor(Math.random() * (HEIGHT - BOX_SIDE));
}

function draw() {
    if (!canvas) {
        background(0);
    }
    
    canvas ? fill(255, 0, 255) : fill(255);
    textSize(10);
	textFont('Verdana');
	var speed = Math.abs(xChange.toFixed(1));
	var txt = "SPACE: pause/play, UP: faster, DOWN: slower (Speed: " + speed + ")";
	txt += "      ** sound on **       ENTER: access/escape secret canvas";
	text(txt, 2, HEIGHT-2);
	
    if (!paused && !canvas) {
        x += xChange;
    	y += yChange;
    }
    
    if (x + xChange < 0 || x + xChange > WIDTH - BOX_SIDE) {
		xChange *= -1;
        colorAndSound();
    }
	if (y + yChange < 0 || y + yChange > HEIGHT - BOX_SIDE) {
        yChange *= -1;
        colorAndSound();
	}
	
	fill(c);
	noStroke();
	rect(x, y, BOX_SIDE, BOX_SIDE);
	fill(0);
	textSize(36);
	text("DVD", x + (BOX_SIDE*0.12), y + (BOX_SIDE*0.6));
	fill(255);
	
	if (canvas) {
	    fill(c);
	    textSize(24);
	    text("Draw on me!", 10, 40);
	}
  
}

function colorAndSound() {
    c = colors[Math.floor(Math.random() * colors.length)];
    bell.setVolume(0.1);
    bell.play();
}

function keyPressed() {
    ting.setVolume(0.1);
    ting.play();
    if (keyCode === UP_ARROW) {
        xChange *= 1.1;
        yChange *= 1.1;
    } else if (keyCode === DOWN_ARROW) {
        xChange *= 0.9;
        yChange *= 0.9;
    } else if (keyCode === 32) {
        paused ? paused = false : paused = true;
    } else if (keyCode === ENTER) {
        canvas ? canvas = false : canvas = true;
        if (canvas) {
            background(255);
            magic.setVolume(0.1);
            magic.play();
        }
    }
    return false;
}

function mouseDragged() {
    colorMode(HSL, 255);
    hue < 255 ? hue += 5 : hue = 0;
    fill(hue, 200, 150);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
}
