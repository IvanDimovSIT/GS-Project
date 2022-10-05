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
    new Cloud(5, 0, 200, 100, Math.PI/6)
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

    console.log("player:",player);
    player.simulate();

    walls.forEach(i =>{
        player.hit(i);
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

    decorations.forEach(i => {
        if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });


    drawCount += 1;
    player.draw(ctx, canvas, focusPoint);
    
    walls.forEach(i =>{
        if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });

    if(isMouseDown){
        drawJumpBar(ctx, canvas, mousePos, player.jump);
    }

    console.log("drawing: ", drawCount, " objects");
}

window.onload = function() {
    const startGame = setInterval(main, 1000/60);
}