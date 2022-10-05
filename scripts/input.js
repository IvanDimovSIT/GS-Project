let mousePos = new Vector(0,0);
let isMouseDown = false;

function mouseMove(event){
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    //console.log("mouse move:", mousePos);
}

function mouseDown(){
    isMouseDown = true;
}

function mouseUp(){
    isMouseDown = false;
    if(!player.falling){
        const direction = new Vector(mousePos.x - document.getElementById('canvas').width/2 , mousePos.y - document.getElementById('canvas').height/2);
        console.log("jump:", direction);
        normaliseVector(direction, MAX_JUMP*player.jump);
        player.falling = true;
        player.velocity.add(direction.x, direction.y);
        player.jump = 0;
    }
}

document.getElementById('canvas').addEventListener('mousemove', (event) => mouseMove(event));
document.getElementById('canvas').addEventListener('mousedown', (event) => mouseDown());
document.getElementById('canvas').addEventListener('mouseup', (event) => mouseUp());