function setWin(canvas){
    let score = document.getElementById("score");
    score.style.left = "0%";
    score.style.top = "30%";
    score.style.textAlign = "center";
    score.style.width = "100%";
    score.style.height = "100%";
    score.style.fontSize = "70px";
    score.style.color = "rgb(255,255,100)";
    score.style.textShadow = "5px 5px 2px rgba(0,0,0,0.5)";
    canvas.style.filter = "blur(5px)";
}