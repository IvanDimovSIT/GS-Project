function clear(ctx, canvas){
    //ctx.fillStyle = 'rgb(80, 170, 255)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgb(200, 170, 100)");
    gradient.addColorStop(1, "rgb(180,50,10)");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
}