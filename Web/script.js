const WIDTH = 5;
const HEIGHT = 5;

var grid = [];
var path = [];
var step = [];
var state;
var animation;

function setup() {
	createCanvas(400,400);
	initGrid();
	path =newPath()
}
function draw(){
	background(51);
	if (state === 0)
		animation++;
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

function newPath() {
	state = 0;
	animation = 0;
	path.push(new Tile(0, HEIGHT, true));
	while (path[path.length - 1].y !== 0 ){
		var pool = [];
		var prevTile = path[path.length - 1];
	}
}

function initGrid(){
	var size = Math.min(width/WIDTH,height/HEIGHT);
	for (var x = 0; x < WIDTH; x++){
		var col = [];
		for (var y= 0; y < HEIGHT; y++) {
			col.push(new Tile(x, y, false));
		}
		grid.push(col);
	}
}