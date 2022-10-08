class ScreenBlur{
    static FRAMES = 50;
    constructor(){
        this.frame = 0;
    }

    begin(){
        this.frame = ScreenBlur.FRAMES;
    }

    draw(ctx, canvas){
        if(this.frame>0){
            console.log("bluring screen");
            
            ctx.filter = 'blur('+(this.frame/ScreenBlur.FRAMES)*2.0+'rem)';
            
            this.frame -= 1;
        }
    }

}