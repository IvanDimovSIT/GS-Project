function normaliseVector(vec, a){
    if(vec.x!=0 && vec.y!=0){
        const c = a/Math.sqrt(vec.x*vec.x + vec.y*vec.y);
        vec.x = vec.x*c;
        vec.y = vec.y*c;
    }
}


function angleX(vec){
    let ang = 0;
    let x = vec.x;
    let y = vec.y;
    if(x<0 && y>0){
        let temp = -x;
        x = y;
        y = temp;
        ang = Math.PI/2;
    }else if(x<0 && y<0){
        x = -x;
        y = -y;
        ang = Math.PI;
    }else if(x>0 && y<0){
        let temp = x;
        x = -y;
        y = temp;
        ang = 3*Math.PI/2;
    }
    ang += Math.atan(y/x);
    return ang;
}

function smallestNonZero(value,a,b,c){
    if(value==0)
        return false;
    return (value<a || a==0) && (value<b || b==0) && (value<c || c==0);
}

function rotatePoint(a,r,angle){
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);

    const X = r.x + ((a.x-r.x))*cosA-(a.y-r.y)*sinA;
    const Y = r.y + ((a.y-r.y))*cosA+(a.x-r.x)*sinA;
    return new Vector(X,Y);
}