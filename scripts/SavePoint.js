class SavePoint extends Box{
    static LAST_FRAME = 80;
    constructor(x,y){
        super(x,y, 400, 400);
        this.active = false;
        this.frame = SavePoint.LAST_FRAME;
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x+this.x;
        const offsetY = canvas.height/2 - relativeTo.y+this.y;

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.strokeStyle = "rgb(0,0,0)";
        
        ctx.rect(0.1*this.width+offsetX, 0.95*this.height+offsetY, this.width*0.15, this.height*0.05);
        const A = new Vector(0.15*this.width+offsetX, 0.95*this.height+offsetY);
        let B = new Vector(0.15*this.width+offsetX, 0.4*this.height+offsetY);
        let C = new Vector(0.55*this.width+offsetX, 0.4*this.height+offsetY);
        let D = new Vector(0.55*this.width+offsetX, 0.6*this.height+offsetY);
        let E = new Vector(0.15*this.width+offsetX, 0.6*this.height+offsetY);

        B = rotatePoint(B, A, Math.PI/4);
        C = rotatePoint(C, A, Math.PI/4);
        D = rotatePoint(D, A, Math.PI/4);
        E = rotatePoint(E, A, Math.PI/4);

        if(this.active){
            this.frame -= 1;
            if(this.frame<0){
                this.frame = 0;
            }
            B = rotatePoint(B, A, -(1 - (this.frame/SavePoint.LAST_FRAME))*Math.PI/4);
            C = rotatePoint(C, A, -(1 - (this.frame/SavePoint.LAST_FRAME))*Math.PI/4);
            D = rotatePoint(D, A, -(1 - (this.frame/SavePoint.LAST_FRAME))*Math.PI/4);
            E = rotatePoint(E, A, -(1 - (this.frame/SavePoint.LAST_FRAME))*Math.PI/4);

        }

        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();

        ctx.lineWidth = 1;
        ctx.fillStyle = "rgb(230,20,20)";
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.lineTo(D.x, D.y);
        ctx.lineTo(E.x, E.y);
        ctx.closePath()

        ctx.stroke();
        ctx.fill();
    }


}