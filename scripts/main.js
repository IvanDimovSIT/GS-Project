const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const walls = [
    new Wall( 5, 250, 100, 100),
    new Wall( 230, 300, 200, 100),
    new Wall(-40, 800, 500, 200),
    new Wall(-300, 1120, 1500, 80),
    new Wall( 1300, 1000, 1500, 80),
    new Wall( 2900, 900, 700, 80),
    new Wall( 3700, 800, 500, 160),
    new Wall( 4550, 600, 400, 160)
];

const decorations = [
    new Cloud(5, 0, 200, 100, Math.PI/6),
    new Cloud(1900, 450, 200, 120, -Math.PI/12),
    new Cloud(1800, 500, 100, 50, Math.PI/8),
    new Cloud(2100, 480, 50, 40, Math.PI/3)
];

let coins = [
    new Coin(100, 50),
    new Coin(1200, 700),
    new Coin(1800, 800),
    new Coin(2400, 600)
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