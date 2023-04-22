let sqr = {}
let canvas = document.getElementById("SqrSec");
let ctx = canvas.getContext("2d");


// let sqrSec = document.getElementById("mainSec");

let blackSqr = document.getElementById("rectHeader")
blackSqr.onclick = function () {
    for (let i = 0; i < 3; i++) {
    let sqr = document.getElementById("sqr");
       sqr. ctx.fillRect(i * size, i * size, size, size);
        size += 20;
        ctx.fillStyle = "black";
    }
}