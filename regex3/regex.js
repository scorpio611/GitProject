function isEmailOrNot(str) {
    var regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regex.test(str)){
        console.log('Email hop le');
    }
    else {console.log('Email khong hop le');}
}

isEmailOrNot('abc@hotmail.com');
isEmailOrNot('@gmail.com');