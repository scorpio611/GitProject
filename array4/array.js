function bai1(){
    myColor = ["Red", "Green", "White", "Black"];
    alert(myColor.join(","));
}

function bai2() {
    var number = prompt("Nhap so:");
    var s = number.toString();
    var result = [s[0]];
    for(var x=0;x<s.length;x++){
        if((s[x-1]%2==0)&&(s[x]%2==0)){
            result.push('-',s[x]);
        }
        else {
            result.push(s[x]);
        }
    }
    alert(result.join(""));
}

function bai3() {
    var str = prompt("Enter string:");
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
   /* what is !== -1 mean????

    for(var i=0;i<str.length;i++){
        if(UPPER.indexOf(str[i]) !== -1){
            result.push(str[i].toLowerCase());
        }
        else if(lower.indexOf(str[i]) !== -1){
            result.push(str[i].toUpperCase());
        }
        else {
            result.push(str[i]);
        }
    }*/

    for(var i=0;i<str.length;i++){
        for(var j=0;j<UPPER.length;j++){
            if(str[i]==UPPER[j]){
                result.push(str[i].toLowerCase());
            }
        }
        for(var k=0;k<lower.length;k++){
            if(str[i]==lower[k]){
                result.push(str[i].toUpperCase());
            }
        }
        if(str[i]==' '){
            result.push(str[i]);
        }
        }
    alert(result.join(""));
}