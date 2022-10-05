class Wall extends Box{
    constructor(x, y, width, height){
        super(x,y,width,height);
    }

    draw(ctx, canvas, relativeTo){
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgb(0,0,0)";
        
        const brickImage = new Image();
        brickImage.src = "assets/brick.jpeg";
        const patternBrush = ctx.createPattern(brickImage,"repeat");
        
        ctx.setTransform( 1, 0, 0, 1,
            this.x - relativeTo.x + canvas.width/2,
            this.y - relativeTo.y + canvas.height/2);
        ctx.fillStyle = patternBrush;        
        ctx.rect(0,0,this.width,this.height);
        ctx.fill();
        ctx.stroke();
        ctx.setTransform( 1, 0, 0, 1, 0, 0 );
    }

}