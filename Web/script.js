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
	newPath()
}
function draw(){
	background(51);
	if (state === 0)
		animate();
	drawGrid();
}

function drawGrid(){
	strokeWeight(2);
	stroke(255);
	var size = Math.min(width/WIDTH,height/HEIGHT);
	for (var x = 0; x < WIDTH; x++){
		for (var y= 0; y < HEIGHT; y++) {
			if (grid[x][y].lit)
				fill(255);
			else
				noFill();
			rect(x * size, y* size, size, size);
		}
	}
}
function animate(){
	animation++;

	var route = Math.floor(animation / 60);

	if(route > path.length){
		state = 1;
		return;
	}
	var tile = path[route];
	grid[tile.x][tile.y].lit = true;
}

function newPath() {
	state = 0;
	animation = 0;

	path.push(new Tile(0, HEIGHT - 1, true));

	var i = 0;
	while (path[path.length - 1].y !== 0){

		var pool = [];
		var prevTile = path[path.length - 1];

		var left = new Tile(prevTile.x - 1, prevTile.y, true);
		var right = new Tile(prevTile.x + 1, prevTile.y, true);
		var up = new Tile(prevTile.x, prevTile.y - 1, true);

		console.log(left.x);

		if (left.x >= 0 && !pool.includes(left))
			pool.push(left);

		if (right.x <= WIDTH && !pool.includes(left))
			pool.push(right);

		if (up.y < HEIGHT && !pool.includes(up))
			pool.push(up);

		path.push(random(pool)):
		i++;
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
	// 1:03:06-1:24:51 from Tian line127+++
	function onPath() {

		for (var i = 0; i < path.lenght; i++)
			if (path[i].x !== steps[i].x || path[i].y !== steps[i].y &&)
				return false;
	}
}