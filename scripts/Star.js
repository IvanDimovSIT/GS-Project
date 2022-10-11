class Star extends Box{
    static LAST_FRAME = 200;

    constructor(x,y){
        super(x,y,150, 150);
        this.frame = 0;
        this.glow = new Image();
        this.glow.src = "assets/glow.png"
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x+this.x;
        const offsetY = canvas.height/2 - relativeTo.y+this.y;
        const rotation = Math.abs( 1 - 2*this.frame/Star.LAST_FRAME);

        const A = new Vector(offsetX + this.width/2,0+offsetY);
        const B = new Vector(rotation*(this.width/2) + offsetX + this.width/2,this.height+offsetY);
        const C = new Vector(rotation*(-this.width/1.5) + + offsetX + this.width/2,this.height/3+offsetY);
        const D = new Vector(rotation*(this.width/1.5) + offsetX + this.width/2,this.height/3+offsetY);
        const E = new Vector(rotation*(-this.width/2) + offsetX + this.width/2,this.height+offsetY);

        ctx.lineWidth = 0;
        ctx.fillStyle = "rgb(255,255,"+rotation*100+")";
        ctx.drawImage(this.glow, offsetX, offsetY, this.width, this.height)
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.lineTo(D.x, D.y);
        ctx.lineTo(E.x, E.y);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        this.frame += 1;
        if(this.frame>Star.LAST_FRAME){
            this.frame = 0;
        }
    }

}