function bai1() {
    var a = prompt("Enter a:", '');
    var b = prompt("Enter b:", '');

    result =((a + b) < 4) ? 'Below' : 'Over';
    alert(result);
}

function bai2() {
    var login = prompt("Who're you?",'');
    var messsage;
    messsage = (login=='Employee') ? 'Hello': (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
    alert(messsage);
}

