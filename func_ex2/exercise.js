function bai1() {
    var x = parseInt(prompt("Nhap so can tinh binh phuong:"));
    function sqrtReturn(a) {
        alert(Math.sqrt(a));
    }
    sqrtReturn(x);
}

function bai2() {
    var x = parseInt(prompt("Nhap ban kinh:"));
    function result(a) {
        alert("Chu vi hinh tron la:"+a*2*Math.PI+"  "+"Dien tich hinh tron la:"+Math.PI*a*a);
    }
    result(x);
}

function bai3() {
    var x = parseInt(prompt("Nhap so can tinh:"));
    function factorial(a) {
        var fact=1;
        for(var i=1;i<=a;i++){
            fact *= i;

        }
        console.log(fact);
        alert("Giai thua cua so da nhap la:"+fact);
    }
    factorial(x);
}

function bai4() {

    var x = prompt("Nhap so can kiem tra:");
    function checkNumber(a) {
        var num = [0,1,2,3,4,5,6,7,8,9];
        var result ="";
        for(var i=0;i<x.length;i++){
            for(var j=0;j<num.length;j++){
                if(a[i]==num[j]){
                    result+=a[i];
                }
            }
        }
        if(result.length!=a.length){
            alert("Ky tu nhap vao khong phai ky tu so");
        }
        else {
            alert("Ky tu nhap vao la ky tu so");
        }
    }
    checkNumber(x);
}

function bai5() {
    var x = parseInt(prompt("Nhap so thu nhat:"));
    var y = parseInt(prompt("Nhap so thu hai:"));
    var z = parseInt(prompt("Nhap so thu ba:"));
    function minNumber(a,b,c) {
        if(a<b && a<c){alert("So nho nhat la:"+a);}
        else if(b<a && b<c){alert("So nho nhat la:"+b);}
        else {alert("So nho nhat la:"+c);}
    }
    minNumber(x,y,z);
}

function bai6() {
    //var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'	,'v','w','x','y','z','A','B','C','D''E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var x =prompt("Nhap ky tu:");
    function isVowel(a) {
        var vowel=['a','e','o','i','u'];
        for(var i=0;i<vowel.length;i++){
            console.log(vowel[i]);
            if(a==vowel[i])
            {alert("ky tu da nhap la nguyen am");
            break;}
            else
                {alert("ky tu da nhap khong phai la nguyen am");
                break;}
        }

    }
    isVowel(x);
}

function bai7() {
    var x =prompt("Nhap so:").split(',');
    var temp=0;
    temp=x[0];
    x[0]=x[1];
    x[1]=temp;
    alert(x[0]+','+x[1]);
}

function bai8() {
    var x = prompt("Nhap mang:");
    var result=[];
    for(var i=x.length-1;i>=0;i--){
        result+=x[i];
    }
    alert(result);
}

function bai9() {
    var x = prompt("Nhap mang:");
    var y = prompt("Nhap ky tu");
    var count=0;
    for(var i =0;i<x.length;i++){
        if(y==x[i]){
            count++;
        }
    }
    if(count==0){
        return -1   ;
    }
    else {
        alert(y+" xuat hien "+count+" lan");
    }
}