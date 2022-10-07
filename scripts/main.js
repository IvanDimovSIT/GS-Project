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
    new Wall( -1300, -4100, 100, 2100, wallPattern),//side walls
    new Wall( 1200, -2000, 100, 2100, wallPattern),//side walls
    new Wall( -1000, -500, 600, 80, wallPattern),
    new Wall( -100, -700, 600, 80, wallPattern),
    new Wall( 600, -950, 600, 80, wallPattern),
    new Wall( -600, -1150, 600, 80, wallPattern),
    new Wall( -1200, -1250, 500, 40, wallPattern),
    new Wall( -700, -1600, 1500, 80, wallPattern),//end area1
    new Wall( 500, -1800, 700, 200, wallPattern),
    new Wall( 1200, -2000, 900, 200, wallPattern2),//area2 start
    new Wall( 2400, -2000, 1100, 200, wallPattern2)
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
    new Coin(1400, -2200),
    new Coin(2600, -2200)
];

//objects overlaping with the screen will be drawn
const screen = new Box(0,0, canvas.width, canvas.height);

function main(){
    //game code
    if(isMouseDown && !player.falling){
        player.jump += JUMP_INCREASE;
        if(player.jump > 1){
            player.jump = 1;
        }
    }

    player.simulate();

    walls.forEach(i =>{
        player.hit(i);
    });

    let collectedCoins = [];
    coins.forEach(i => {
        if(i.overlap(player)){
            collectedCoins.push(i);
            player.score += 1;
        }
    });

    collectedCoins.forEach(i => {
        const ind = coins.indexOf(i);
        if (ind != -1) { 
            coins.splice(ind, 1);
        }
    });

    //graphics code
    let drawCount = 0;
    //update canvas dimensions to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //center the screen on this point
    let focusPoint = new Vector(player.x+player.width/2, player.y+player.height/2);
    clear(ctx, canvas, focusPoint);

    screen.x = focusPoint.x - canvas.width/2;
    screen.y = focusPoint.y - canvas.height/2;
    screen.width = canvas.width;
    screen.height = canvas.height;

    //draw decorations
    decorations.forEach(i => {
    if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });

    //draw coins
    coins.forEach(i => {
        if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });

    //draw the player
    drawCount += 1;
    player.draw(ctx, canvas, focusPoint);
    
    //draw walls
    walls.forEach(i =>{
        if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });

    if(isMouseDown && !player.falling){
        drawJumpBar(ctx, canvas, mousePos, player.jump);
    }

    drawScore(ctx, canvas, player.score);
    console.log("drawing: ", drawCount, " objects");
}

window.onload = function() {
    const startGame = setInterval(main, 1000/60);
}