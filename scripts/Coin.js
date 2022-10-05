const COIN_LAST_FRAME_N = 100;
class Coin extends Box{

    constructor(x,y){
        super(x,y,30,30);
        this.animationFrame = 0;
    }

    draw(ctx, canvas, relativeTo){
        const radiusX = this.width * Math.abs((COIN_LAST_FRAME_N/2 - this.animationFrame)/(COIN_LAST_FRAME_N/2));
        
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(0,0,0)";
        
        
        ctx.setTransform( 1, 0, 0, 1,
            this.x - relativeTo.x + canvas.width/2,
            this.y - relativeTo.y + canvas.height/2);
        ctx.fillStyle = "rgb(255,255,0)";        
        ctx.ellipse(this.width/2,this.height/2,radiusX, this.height, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.setTransform( 1, 0, 0, 1, 0, 0 );
        this.animationFrame += 1;
        if(this.animationFrame>COIN_LAST_FRAME_N){
            this.animationFrame = 0;
        }
    }


}