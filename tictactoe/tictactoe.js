var b = document.getElementById("tictactoe");
var board = [];
var data = "";
for(var i=0;i<5;i++){
    board[i] = [".",".",".",".","."];
}
for(var i=0;i<5;i++){
    data += "<br/>";
    for(var j=0;j<5;j++){
        data += board[i][j] +"&ensp;";
    }
}
data += "<br><br><button type='button' onclick='changeX()'>X</button>&ensp;<button type='button' onclick='changeO()'>O</button>";
b.innerHTML = data;

function changeX() {
    var X = prompt("Enter X");
    if(X>5) prompt("Enter X again");
    var Y = prompt("Enter Y");
    if(Y>5) prompt("Enter Y again");
    data = "";
    if(board[X][Y]!== "O"){
        board[X][Y]= "X";
    }
    else {alert("Its have been ticked");}
    for(var i = 0;i<5;i++){
        data += "<br>";
        for (var j=0;j<5;j++){
            data += board[i][j] + "&ensp;";
        }
    }
    data += "<br><br> <button type='button' onclick='changeX()'>X</button>&ensp;<button type='button' onclick='changeO()'>O</button>";
    b.innerHTML = "<br>"+ data;
}

function changeO() {
    var X = prompt("Enter X");
    var Y = prompt("Enter Y");
    data = "";
    if(board[X][Y]!== "X"){
        board[X][Y]= "O";
    }
    else {alert("Its have been ticked");}

    for(var i = 0;i<5;i++){
        data += "<br>";
        for (var j=0;j<5;j++){
            data += board[i][j] + "&ensp;";
        }
    }

    data += "<br><br><button type='button' onclick='changeX()'>X</button>&ensp;<button type='button' onclick='changeO()'>O</button>";
    b.innerHTML = "<br>"+ data;
}