const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wallImage = new Image();
wallImage.src = "assets/wall.png";
const wallPattern = ctx.createPattern(wallImage, "repeat");

const wallImage2 = new Image();
wallImage2.src = "assets/wall2.png";
const wallPattern2 = ctx.createPattern(wallImage2, "repeat");


const walls = [
    new Wall( -600, 250, 1200, 200, wallPattern),
    new Wall( -1200, -50, 600, 500, wallPattern),
    new Wall(600, -50, 600, 500, wallPattern),
    new Wall(-350, -220, 650, 80, wallPattern),//middle
    new Wall( -1300, -2000, 100, 2100, wallPattern),//side walls
    new Wall( -1300, -4100, 100, 2100, wallPattern2),//side walls
    new Wall( 1200, -2000, 100, 2100, wallPattern),//side walls
    new Wall( -1000, -500, 600, 80, wallPattern),
    new Wall( -100, -700, 600, 80, wallPattern),
    new Wall( 600, -950, 600, 80, wallPattern),
    new Wall( -600, -1150, 600, 80, wallPattern),
    new Wall( -1200, -1250, 500, 40, wallPattern),
    new Wall( -700, -1600, 1500, 80, wallPattern),//end area1
    new Wall( 500, -1800, 700, 200, wallPattern),
    new Wall( 1200, -2000, 900, 200, wallPattern2),//area2 start
    new Wall( 2400, -2000, 1100, 200, wallPattern2),
    new Wall( 3500, -2200, 800, 400, wallPattern2),
    new Wall( 3700, -2700, 600, 100, wallPattern2),
    new Wall( 4300, -4000, 200, 2600, wallPattern2),//side wall
    new Wall( 2400, -2500, 900, 100, wallPattern2),
    new Wall( 1300, -2600, 600, 200, wallPattern2),
    new Wall( 600, -2900, 600, 400, wallPattern2),//savepoint2
    new Wall(-400, -3200, 500, 800, wallPattern2)
];

const decorations = [
    new Cloud(100, -450, 200, 100, Math.PI/6),
    new Cloud(200, -1200, 300, 200, Math.PI/10),
    new Cloud(-200, -2000, 200, 120, 2.2*Math.PI)
];

let coins = [
    new Coin(0, -350),
    new Coin(0, -800),
    new Coin(-550, -1300),
    new Coin(650, -1150),
    new Coin(-500, -1750),
    new Coin(-300, -1750),
    new Coin(-400, -1900),
    new Coin(1800, -2200),
    new Coin(2600, -2200),
    new Coin(3800, -2500),
    new Coin(3900, -2800),
    new Coin(2500, -2700),
    new Coin(2200, -2800),
    new Coin(1300, -2900),
    new Coin(400, -3200)
];

const saws = [
    new Saw(2100, -1900),
    new Saw(2200, -1900),
    new Saw(2300, -1900),
    new Saw(1200, -2750),
    new Saw(500, -2800),
    new Saw(400, -2800),
    new Saw(300, -2800),
    new Saw(200, -2800),
    new Saw(100, -2800)
];

const savePoints = [
    new SavePoint(1200, -2400),
    new SavePoint(600, -3300)
];

const screenBlur = new ScreenBlur();

//only objects overlaping with the screen will be drawn
const screen = new Box(0,0, canvas.width, canvas.height);
