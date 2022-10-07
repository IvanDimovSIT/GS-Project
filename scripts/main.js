const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const walls = [
    new Wall( -600, 250, 1200, 200),
    new Wall( -1200, -50, 600, 500),
    new Wall(600, -50, 600, 500),
    new Wall(-350, -220, 650, 80),//middle
    new Wall( -1300, -2000, 100, 2100),//side walls
    new Wall( 1200, -2000, 100, 2100),//
    new Wall( -1000, -500, 600, 80),
    new Wall( -100, -700, 600, 80),
    new Wall( 600, -950, 600, 80),
    new Wall( -600, -1150, 600, 80),
    new Wall( -1200, -1250, 500, 40),
    new Wall( -700, -1600, 1500, 80)//end area1
];

const decorations = [
    new Cloud(100, -450, 200, 100, Math.PI/6),
    new Cloud(200, -1200, 300, 200, Math.PI/10)
];

let coins = [
    new Coin(0, -350),
    new Coin(0, -800),
    new Coin(-550, -1300),
    new Coin(650, -1150),
    new Coin(-500, -1750),
    new Coin(-300, -1750),
    new Coin(-400, -1900)
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
        if(i.overlap(screen)){
            player.hit(i);
        }
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
    clear(ctx, canvas);
    //center the screen on this point
    let focusPoint = new Vector(player.x+player.width/2, player.y+player.height/2);


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