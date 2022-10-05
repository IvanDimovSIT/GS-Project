function drawScore(ctx, canvas, score){
    ctx.font = Math.round(canvas.width/40) +"px Cursive";

    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Score:"+score, canvas.width/60, canvas.height/12);
}