class Wall extends Box{
    constructor(x, y, width, height){
        super(x,y,width,height);
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x;
        const offsetY = canvas.height/2 - relativeTo.y;

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillStyle = "rgb(150,90,90)";
        
        ctx.rect(this.x + offsetX, this.y + offsetY,this.width,this.height);
        ctx.fill();
        ctx.stroke();
    }

}