var caro = document.getElementById("carogame");
var board = [];
var data = "";
for(var i=0;i<5;i++){
    board[i] = [0,0,0,0,0];
}
for(var i=0;i<5;i++){
    data += "<br/>";
    for(var j=0;j<5;j++){
        data += board[i][j] +"&ensp;";
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
caro.innerHTML = data;

function changeValue() {
    var X = prompt("X: ");
    var Y = prompt("Y: ");
    data = "";
    board[X][Y] = "x";
    for(var i = 0;i<5;i++){
        data += "<br/>";
        for (var j=0;j<5;j++){
            data += board[i][j] + "&ensp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
    caro.innerHTML = "<hr/>"+ data;
}