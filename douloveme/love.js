

function yes() {
        alert("");
}
function no(){
        var x = (parseInt(Math.floor(Math.random()*window.innerWidth))-100);
        var y= (parseInt(Math.floor(Math.random()*window.innerHeight))-100);
        document.getElementById("no").style.left = x + 'px';
        document.getElementById("no").style.top = y + 'px';
}
