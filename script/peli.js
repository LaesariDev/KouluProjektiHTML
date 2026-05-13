const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log("Testi");


let raf;

const maila = {
    x: 250,
    y: 385,
    vx: 5,
    leveys: 100,
    korkeus: 15,
    color: 'red',
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.leveys, this.korkeus);
    }
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    maila.draw();



    raf = window.requestAnimationFrame(draw);
};

draw();