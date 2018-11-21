function isClassName(str) {
    var regex = /^[CAP][0-9]{4}[GHIKLM]$/;
    if(regex.exec(str)){
        document.write(str+" la ten lop hop le"+"<br>");
    }
    else {
        document.write(str+" la ten lop khong hop le"+"<br>");
    }
}

isClassName('C0318G');
isClassName('M0318G');