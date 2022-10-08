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

    savePoints.forEach(i => {
        if(i.overlap(player)){
            player.lastSavePoint = new Vector(i.x+i.width/2, i.y);
        }
    });

    saws.forEach(i => {
        if(i.overlap(player)){
            player.score -= Saw.PENALTY;
            if(player.score <0){
                player.score = 0;
            }
            player.goToPoint(player.lastSavePoint);   
        }
    });

    /////////////////////////graphics code////////////////////////
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

    //draw saws
    saws.forEach(i=>{
        if(i.overlap(screen)){
            drawCount += 1;
            i.draw(ctx, canvas, focusPoint);
        }
    });

    
    savePoints.forEach(i => {
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