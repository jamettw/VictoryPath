const WIDTH = 10;
const HEIGHT = 10;

var grid = [];
var path = [];
var step = [];

function setup() {
	createCanvas(400,400);
	initGrid();
}
function draw(){
	background(51);
	drawGrid();
}

function drawGrid(){
	strokeWeight(2);
	stroke(255);
	var size = Math.min(width/WIDTH,height/HEIGHT);
	for (var x = 0; x < WIDTH; x++){
		for (var y= 0; y < HEIGHT; y++) {
			if (grid[x][y])
				fill(255);
			else
				noFill(); 
			rect(x * size, y* size, size, size);
		}
	}
}

function initGrid(){
	var size = Math.min(width/WIDTH,height/HEIGHT);
	for (var x = 0; x < WIDTH; x++){
		var col = [];
		for (var y= 0; y < HEIGHT; y++) {
			col.push(false)
		}
		grid.push(col)
	}
}