const MAX_VELOCITY = 20;
const AIR_RESISTENCE = 0.05;
const GRAVITY_STRENGTH = 0.5;
const JUMP_INCREASE = 0.02;
const MAX_JUMP = 50;

class Player extends Box{

    constructor(x, y, width, height){
        super(x,y,width,height);
        this.velocity = new Vector(0.0,0.0);
        this.falling = true;
        this.jump = 0;
        this.lastAngle = 0;
    }

    setVelocity(vec){
        this.velocity.x = vec.x;
        this.velocity.y = vec.y;
    }


    draw(ctx, canvas, relativeTo){
        const offsetX = canvas.width/2 - relativeTo.x;
        const offsetY = canvas.height/2 - relativeTo.y;
        //points forming the character
        const R = new Vector(this.x+this.width/2+offsetX, this.y+7*this.height/8+offsetY);

        let A = new Vector(this.x + this.width/2 + offsetX, this.y + this.height/3 + offsetY);
        let B = new Vector(this.x + this.width/2 + offsetX, this.y + 2*this.height/3 + offsetY);
        let C = new Vector(this.x + this.width/8 + offsetX, this.y + 5*this.height/8 + offsetY);
        let D = new Vector(this.x + 7*this.width/8 + offsetX, this.y + 5*this.height/8 + offsetY);
        let E = new Vector(this.x + this.width/4 + offsetX, this.y + 3*this.height/4 + offsetY);
        let F = new Vector(this.x + this.width/4 + offsetX, this.y + this.height + offsetY);
        let G = new Vector(this.x + 3*this.width/4 + offsetX, this.y + 3*this.height/4 + offsetY);
        let H = new Vector(this.x + 3*this.width/4 + offsetX, this.y + this.height + offsetY);
        let I = new Vector(this.x + this.width/2 + offsetX, this.y + this.height/5 + offsetY);
        //translation
        A.add(0, this.jump*this.height/6);
        B.add(0, this.jump*this.height/6);
        C.add(-this.jump*this.width/4, -this.jump*this.height/8);
        D.add(this.jump*this.width/4, -this.jump*this.height/8);
        E.add(-this.jump*this.width/12, this.jump*this.height/12);
        G.add(this.jump*this.width/12, this.jump*this.height/12);
        I.add(0, this.jump*this.height/6);
        //find angle
        let angle = 0;
        if(!this.falling){
            if(isMouseDown){
                const direction = new Vector(mousePos.x-canvas.width/2, canvas.height/2 - mousePos.y);        
                
                let tempAngle = angleX(direction);
                
                //angle must be between 0 and PI 
                if(tempAngle > 3*Math.PI/2){//down right
                    tempAngle = 0;
                }else if(tempAngle > Math.PI){//down left
                    tempAngle = Math.PI;
                }

                angle = 2*Math.PI - ( tempAngle - Math.PI/2);
                
                console.log("direction=",direction," angle=",angle);
            }else{
                angle = 0;//point up
            }
            
            this.lastAngle = angle;
        }else{
            angle = this.lastAngle;
        }
        
        //points after rotation
        
        A = rotatePoint(A, R, angle);
        B = rotatePoint(B, R, angle);
        C = rotatePoint(C, R, angle);
        D = rotatePoint(D, R, angle);
        E = rotatePoint(E, R, angle);
        F = rotatePoint(F, R, angle);
        G = rotatePoint(G, R, angle);
        H = rotatePoint(H, R, angle);
        I = rotatePoint(I, R, angle);
        
        //connecting the points
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        ctx.arc(I.x, I.y, player.width/4, 0, 2*Math.PI);
        ctx.fill();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(E.x, E.y);
        ctx.lineTo(F.x, F.y);
        ctx.moveTo(B.x, B.y);
        ctx.lineTo(G.x, G.y);
        ctx.lineTo(H.x, H.y);
        ctx.moveTo(C.x, C.y);
        ctx.lineTo(A.x, A.y);
        ctx.lineTo(D.x, D.y);
        ctx.stroke();
        
    }

    simulate(){
        if(this.falling){
            this.velocity.add(0, GRAVITY_STRENGTH);
            if(this.velocity.x>0){
                if(this.velocity.x-AIR_RESISTENCE<0){
                    this.velocity.x = 0;
                }else{
                    this.velocity.add(-AIR_RESISTENCE,0);
                }
            }else if(this.velocity.x<0){
                if(this.velocity.x+AIR_RESISTENCE>0){
                    this.velocity.x = 0;
                }else{
                    this.velocity.add(AIR_RESISTENCE,0);
                }
            }

            if(this.velocity.x>MAX_VELOCITY){
                this.velocity.x = MAX_VELOCITY;
            }else if(this.velocity.x<-MAX_VELOCITY){
                this.velocity.x = -MAX_VELOCITY;
            }
            
            if(this.velocity.y>MAX_VELOCITY){
                this.velocity.y = MAX_VELOCITY;
            }else if(this.velocity.y < -MAX_VELOCITY){
                this.velocity.y = -MAX_VELOCITY;
            }
            
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }
    }

    hit(box){
        if(this.overlap(box)){
            console.log(this," hit:",box);

            const dist = this.fix(box);
            this.add(dist.x, dist.y);

            if(dist.x!=0){
                this.velocity.x = 0;
            }

            if(dist.y!=0){
                this.velocity.y = 0;
                this.velocity.x = 0;
            }

            if(dist.y < 0){
                this.falling = false;
            }
        }
    }

}

const player = new Player(10, 10, 60, 120);