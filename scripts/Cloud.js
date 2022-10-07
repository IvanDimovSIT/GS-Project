class Cloud extends Box{
    
    constructor(x, y, radiusX, radiusY, angle){
        const larger = radiusX>radiusY?radiusX:radiusY;
        super(x,y,larger*2,larger*2);
        this.angle = angle;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    draw(ctx, canvas, relativeTo){

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(0,0,0)";
        
        const gradient = ctx.createLinearGradient(0,0,0,this.radiusY*2);
        gradient.addColorStop(0, "rgb(200,50,20)");
        gradient.addColorStop(0.2, "rgb(195,40,20)");
        gradient.addColorStop(1, "rgb(70,40,20)");
        
        ctx.setTransform( 1, 0, 0, 1,
            this.x - relativeTo.x + canvas.width/2,
            this.y - relativeTo.y + canvas.height/2);
        ctx.fillStyle = gradient;        
        ctx.ellipse(this.radiusX,this.radiusY,this.radiusX, this.radiusY, this.angle, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.setTransform( 1, 0, 0, 1, 0, 0 );
    }

}