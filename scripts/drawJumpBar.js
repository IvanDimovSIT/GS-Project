function drawJumpBar(ctx, canvas, cursorLocation, jumpPower){
    const topLeftX = cursorLocation.x - 15;
    const topLeftY = cursorLocation.y + 25;   
    const barWidth = 15;
    const barHeight = 60;
    const greenHeight = barHeight * jumpPower;
    const greenTopLeftY = topLeftY + (barHeight - greenHeight);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.rect(topLeftX, topLeftY, barWidth, barHeight);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgb(20,255,20)";
    ctx.fillRect(topLeftX, greenTopLeftY, barWidth, greenHeight);
    

}