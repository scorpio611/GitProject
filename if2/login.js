var username = prompt("Enter your's username:",'');

if(username=='Admin'){
    var password = prompt("Enter your's password:",'');
    if(password=='TheMaster'){
        alert('Welcome');
    }
    else if(password==null){
        alert('Canceled');
    }
    else {
        alert('Wrong password!');
    }
}
else if(username==null){
    alert('canceled');
}
else {
    alert('I don’t know you');
}
