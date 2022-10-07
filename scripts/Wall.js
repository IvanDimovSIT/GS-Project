class Wall extends Box{
    constructor(x, y, width, height, pattern){
        super(x,y,width,height);
        this.pattern = pattern;
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x;
        const offsetY = canvas.height/2 - relativeTo.y;

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillStyle = this.pattern;
        
        ctx.setTransform( 1, 0, 0, 1,
            this.x + offsetX,
            this.y + offsetY);

        ctx.fillRect(0, 0,this.width,this.height);
        ctx.rect(0,0,this.width, this.height);
        ctx.stroke();
        ctx.setTransform( 1, 0, 0, 1, 0, 0 );
    }

}