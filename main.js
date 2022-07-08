function preload() {
	world_start = loadSound("world_start.wav");
	mario_die = loadSound("mariodie.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_collect_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1530,705);
	instializeInSetup(mario);
}

function draw() {
	game();
}




