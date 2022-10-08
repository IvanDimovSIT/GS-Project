class SavePoint extends Box{
    
    constructor(x,y){
        super(x,y, 400, 400);
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x;
        const offsetY = canvas.height/2 - relativeTo.y;

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.rect(this.x+offsetX, this.y + offsetY, this.width, this.height);
        ctx.stroke();
        ctx.fill();
    }


}