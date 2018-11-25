function alertMessage() {
    alert("Xin chao");
}

function bai2() {
    var x = parseInt(prompt("Nhap doi so"));
    function returnValue(a){
        alert(a+1);
    }
    returnValue(x);
}

function bai3() {
    var x = parseInt(prompt("Nhap doi so thu nhat"));
    var y = parseInt(prompt("Nhap doi so thu hai"));
    function returnValue(a,b){
        if(a>b){
            alert(a);
        }
        else {
            alert(a+b);
        }
    }
    returnValue(x,y);
}

function bai4() {
    var result = 0;
    alert(result);
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = addNumbers();
    alert(result);
}

function bai5() {

    var a = prompt("Nhap ngoi sao can tim",'');
    function findStar(x) {
        var star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
        var constellation = [' Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' , 'Leo'];
        for(var i=0;i<star.length;i++){
            if(x==star[i]){
                document.write("Ngoi sao ban muon tim la "+star[i]+" thuoc chom sao "+constellation[i]);
                break;
            }
            else {
                document.write("Khong tim thay ngoi sao ban muon tim");
                break;
            }
        }

    }
    findStar(a);
}