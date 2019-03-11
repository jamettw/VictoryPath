const WIDTH = 5;
const HEIGHT = 5;

var grid = [];
var path = [];
// var step = [];

var size;

var state; // 0 = animation and 1 = playing
var animation;

function setup() {
	createCanvas(400, 400);

	size = Math.min(width / WIDTH, height / HEIGHT);

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

	var size = Math.min(width / WIDTH, height / HEIGHT);

	for (var x = 0; x < WIDTH; x++){
		for (var y = 0; y < HEIGHT; y++) {

			if (grid[x][y].lit)
				fill(200);
			else
				noFill();

			rect(x * size, y* size, size, size);
		}
	}

}

function animate(){
	animation++;

	var route = Math.floor(animation / 60);

	if(route >= path.length){

		state = 1; //done animating
		initGrid();
		return;
	}

	console.log("flag");

	var tile = path[route];
	grid[tile.x][tile.y].lit = true;
}

function newPath() {
	state = 0; //animating
	animation = 0; //time

	path.push(new Tile(0, HEIGHT - 1, true));

	var i = 0;
	while (path[path.length - 1].y !== 0){

		var pool = [];
		var prevTile = path[path.length - 1];

		var left = new Tile(prevTile.x - 1, prevTile.y, true);
		var right = new Tile(prevTile.x + 1, prevTile.y, true);
		var up = new Tile(prevTile.x, prevTile.y - 1, true);

		if (left.x >= 0 && !arrIncludes(path, left))
			pool.push(left);

		if (right.x <= WIDTH && !arrIncludes(path, right))
			pool.push(right);

		if (up.y < HEIGHT && !arrIncludes(path, up))
			pool.push(up);

		path.push(random(pool));
	}
}

function initGrid(){

	grid= [];

	for (var x = 0; x < WIDTH; x++){
		var col = [];
		for (var y= 0; y < HEIGHT; y++) {

			col.push(new Tile(x, y, false));
		}
		grid.push(col);
	}

};

function arrIncludes(pool, tile) {

	var t = JSON.stringify(tile);
	for (var i = 0; i < pool.length; i++)
		if (JSON.stringify(pool[i] === t)
		return trues;

	return false;
};

}