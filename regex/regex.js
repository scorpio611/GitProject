function isFirstLetterUpperCase(str) {
    var regex = /^[A-Z]/;
    if(regex.test(str)){
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}