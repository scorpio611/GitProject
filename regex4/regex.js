function isValidateAccount(array) {
    var regex = /^[_a-z0-9]{6,}$/;
    for(var i=0;i<array.length;i++){
        console.log(array[i]);
       if(regex.exec(array[i])) {
           document.write(array[i]+" is a validate account"+"<br>");
       }
       else {
           document.write(array[i]+" is not a validate account"+"<br>");
       }
    }
}

var array1 = ['123abc_', '_abc123', '______', '123456', 'abcdefg'];

var array2 = ['.@', '12345', '1234_', 'abcde'];

isValidateAccount(array1);
isValidateAccount(array2);