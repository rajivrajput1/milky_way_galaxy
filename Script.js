var button = document.getElementById("change");
var ply = document.querySelector("ply");
var ball = document.querySelector("ball");

Function changeSide() {
if (ply.src === "left.png") {
ply.src = "right.png";
ball.style.left = "330";
}else{
ply.src = "left.png";
ball.style.left = "215"
}
}

Function Shoot() {

}
