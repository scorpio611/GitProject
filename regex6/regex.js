function isMobileNumber(str) {
    var regex = /^\([0-9]{2}\)-\([0-9]{10}\)$/;
    if(regex.exec(str)){
        document.write(str+" la so dien thoai hop le"+"<br>");
    }
    else {
        document.write(str+" khong phai la so dien thoai hop le"+"<br>");
    }
}

isMobileNumber('(84)-(0978489648)');
isMobileNumber('(a8)-(22222222)');