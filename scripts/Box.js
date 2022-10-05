class Box extends Vector{

    constructor(x, y, width, height){
        super(x,y);
        this.width = width;
        this.height = height;
    }


    overlap(box){
        return !(
            (this.x+this.width<box.x) || (this.x>box.x+box.width) ||
            (this.y+this.height<box.y) || (this.y>box.y+box.height));
    }

    fix(box){
        let distLeft = this.x+this.width - box.x;
        if(distLeft<0 || distLeft>box.width/2)
            distLeft = 0;

        let distRight = - ( this.x - ( box.x + box.width));
        if(distRight<0 || distRight>box.width/2)
            distRight = 0;

        let distTop = this.y + this.height - box.y;
        if(distTop<0 || distTop>box.height/2)
            distTop = 0;

        let distBottom = - ( this.y - (box.y+box.height));
        if(distBottom<0 || distBottom>box.height/2)
            distBottom = 0;

        if(distLeft == 0 && distRight == 0 && distTop == 0 && distBottom == 0)
            return new Vector(0,0);

        

        if(smallestNonZero(distLeft, distRight, distBottom, distTop)){//go left
            console.log("going left:",distLeft);
            return new Vector(-(distLeft+1), 0);
        }else if(smallestNonZero(distRight, distLeft, distBottom, distTop)){//go right
            console.log("going right:",distRight);
            return new Vector(distRight+1, 0);
        }else if(smallestNonZero(distBottom, distLeft, distRight, distTop)){//go down
            console.log("going down:",distBottom);
            return new Vector(0, distBottom+1);
        }else{//go up
            console.log("going up:",distTop);
            return new Vector(0, -(distTop+1));
        }

    }

}