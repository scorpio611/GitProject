 var nam = parseInt(prompt("Nhập năm:"));

var  chiahetcho4 = nam%4 == 0;
if(chiahetcho4){
    var chiahetcho100 = nam % 100 == 0;
    if(chiahetcho100){
        var chiahetcho400 = nam % 400 == 0;
        if(chiahetcho400){
            alert(nam+" là năm nhuận");
        }

    }
    else {
        alert(nam+" không phải là năm nhuận");
    }
}
