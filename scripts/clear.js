function clear(ctx, canvas, location){

    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    
    if(location.y > -1900){
        gradient.addColorStop(0, "rgb(200, 170, 100)");
        gradient.addColorStop(1, "rgb(180,50,10)");
    }else{
        gradient.addColorStop(0, "rgb(100, 100, 110)");
        gradient.addColorStop(1, "rgb(50,50,55)");
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
}