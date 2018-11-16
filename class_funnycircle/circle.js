function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function drawCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var circle = new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawRandomCirle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random()*80);
    var circle = new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
}


    function getRandomHex() {
        return Math.floor(Math.random()*255);
    }
    
    function getRandomColor() {
        var red = getRandomHex();
        var green = getRandomHex();
        var blue = getRandomHex();
        return "rgb("+red+","+blue+","+green+")";
    }

    function createCircle() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var radius = Math.floor(Math.random()*80);
        var color = getRandomColor();
        var circle = new Circle(500, 500, radius);
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

function createRandomCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random()*80);
    var color = getRandomColor();
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}



var ctx = document.getElementById("myCanvas").getContext("2d");
var x = 10 ;
var y = 250;
function moveCirle(){
    var circle = new Circle(x, y, 30);
    var color = getRandomColor();
    ctx.clearRect(0,0,2000,2000);
    x+=1;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI,true);
    ctx.closePath();
    ctx.fill();

}
setInterval(moveCirle,1);




