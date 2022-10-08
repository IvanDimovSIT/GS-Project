class Saw extends Box{
    static LAST_FRAME = 50;
    constructor(x,y){
        super(x,y, 100, 100);
        this.currentFrame = 0;
    }

    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x + this.x;
        const offsetY = canvas.height/2 - relativeTo.y + this.y;
        const angle = 2*Math.PI*(this.currentFrame/Saw.LAST_FRAME);

        let A = new Vector(0.5*this.width+offsetX, 0*this.height+offsetY);
        let B = new Vector(0.6*this.width+offsetX, 0.27*this.height+offsetY);
        let C = new Vector(0.85*this.width+offsetX, 0.16*this.height+offsetY);
        let D = new Vector(0.72*this.width+offsetX, 0.41*this.height+offsetY);
        let E = new Vector(1*this.width+offsetX, 0.5*this.height+offsetY);
        let F = new Vector(0.72*this.width+offsetX, 0.59*this.height+offsetY);
        let G = new Vector(0.85*this.width+offsetX, 0.85*this.height+offsetY);
        let H = new Vector(0.59*this.width+offsetX, 0.72*this.height+offsetY);
        let I = new Vector(0.5*this.width+offsetX, 1*this.height+offsetY);
        let J = new Vector(0.41*this.width+offsetX, 0.72*this.height+offsetY);
        let K = new Vector(0.15*this.width+offsetX, 0.85*this.height+offsetY);
        let L = new Vector(0.28*this.width+offsetX, 0.59*this.height+offsetY);
        let M = new Vector(0*this.width+offsetX, 0.5*this.height+offsetY);
        let N = new Vector(0.26*this.width+offsetX, 0.42*this.height+offsetY);
        let O = new Vector(0.15*this.width+offsetX, 0.15*this.height+offsetY);
        let P = new Vector(0.39*this.width+offsetX, 0.27*this.height+offsetY);

        
        const R = new Vector(0.5*this.width+offsetX, 0.5*this.height+offsetY);

        
        A = rotatePoint(A,R,angle);
        B = rotatePoint(B,R,angle);
        C = rotatePoint(C,R,angle);
        D = rotatePoint(D,R,angle);
        E = rotatePoint(E,R,angle);
        F = rotatePoint(F,R,angle);
        G = rotatePoint(G,R,angle);
        H = rotatePoint(H,R,angle);
        I = rotatePoint(I,R,angle);
        J = rotatePoint(J,R,angle);
        K = rotatePoint(K,R,angle);
        L = rotatePoint(L,R,angle);     
        M = rotatePoint(M,R,angle);
        N = rotatePoint(N,R,angle);
        O = rotatePoint(O,R,angle);
        P = rotatePoint(P,R,angle);
        
        //draw

        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillStyle = "rgb(100,100,100)";
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.lineTo(D.x, D.y);
        ctx.lineTo(E.x, E.y);
        ctx.lineTo(F.x, F.y);
        ctx.lineTo(G.x, G.y);
        ctx.lineTo(H.x, H.y);
        ctx.lineTo(I.x, I.y);
        ctx.lineTo(J.x, J.y);
        ctx.lineTo(K.x, K.y);
        ctx.lineTo(L.x, L.y);
        ctx.lineTo(M.x, M.y);
        ctx.lineTo(N.x, N.y);
        ctx.lineTo(O.x, O.y);
        ctx.lineTo(P.x, P.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = "rgb(140,140,140)";
        ctx.arc(R.x, R.y, this.width/6, 0, 2*Math.PI);
        ctx.fill();


        this.currentFrame += 1;
        if(this.currentFrame >= Saw.LAST_FRAME){
            this.currentFrame = 0;
        }

    }

}