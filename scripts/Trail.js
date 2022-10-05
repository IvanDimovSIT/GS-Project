class Trail{

    constructor(){
        this.points = [];
    }

    addPoint(p){
        this.points.push(p);
    }

    reset(){
        this.points = [];
    }

    draw(ctx, canvas, relativeTo){
        if(this.points.length > 1){

            const offsetX = canvas.width/2 - relativeTo.x;
            const offsetY = canvas.height/2 - relativeTo.y;

            ctx.lineWidth = 3;
            ctx.strokeStyle = "rgba(0,0,0,0.7)";
            ctx.setLineDash([3, 18]);
            ctx.beginPath();
            ctx.moveTo(this.points[0].x + offsetX, this.points[0].y + offsetY);
            for(let i=1; i<this.points.length; i++){
                ctx.lineTo(this.points[i].x + offsetX, this.points[i].y + offsetY);
            }
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }

}