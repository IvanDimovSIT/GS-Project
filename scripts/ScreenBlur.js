class ScreenBlur{
    static FRAMES = 40;
    constructor(){
        this.frame = 0;
    }

    begin(){
        this.frame = ScreenBlur.FRAMES;
    }

    draw(ctx){
        if(this.frame>0){
            console.log("bluring screen");
            
            //ctx.filter = 'blur('+(this.frame/ScreenBlur.FRAMES)*2.0+'rem)';
            ctx.filter = "brightness("+(1.0 - this.frame/ScreenBlur.FRAMES)+")";

            this.frame -= 1;
        }
    }

}