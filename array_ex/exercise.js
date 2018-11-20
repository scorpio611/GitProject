function bai1() {
    var array = prompt("Nhap mang: ").split(',');
    var count=0;
    var result = "";
    for(var i=0;i<array.length;i++){
        if(array[i]>=10){
            count++;
            result+=array[i]+",";
        }
    }
    document.write("Mang co "+count+" phan tu lon hon hoac bang 10, do la: "+result);
}

function bai2() {
    var array = prompt("Nhap mang: ").split(',');
    var max=array[0];
    var position;
    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i];
            position=i;
        }
    }
    document.write("Phan tu lon nhat la: "+max+" o vi tri "+position);
}

function bai3() {
    var array = prompt("Nhap mang: ").split(',');
    var max=0;
    var total=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i];
        }
        total+=parseInt(array[i]);
    }
    document.write("Phan tu lon nhat la: "+max+", gia tri trung binh cac phan tu la:"+total/(array.length));
}

function bai4() {
    var array = prompt("Nhap mang: ").split(',');
    for(var i=array.length-1;i>=0;i--){
        document.write(array[i]+" ");
    }
}

function bai5() {
    var array = prompt("Nhap mang: ").split(',');
    var num = [];
    for(var i=0;i<array.length;i++){
        if(array[i]<0){
            num.push(array[i]);
        }
    }
    document.write("Cac so nguyen am la: "+num.join(","));
}

function bai6() {
    var array = prompt("Nhap mang: ").split(',');
    var check=true;
    for(var i=0;i<array.length;i++){

        if(array[i]=='V'){
            check=true;
        }
        else {
            check=false;
            break;
        }
    }
    if(check===true){
        document.write("V is in the array");
    }
    else {
        document.write("V is not in the array");
    }

}

function bai7() {
    var array = prompt("Nhap mang: ").split(',');
    for(var i=0;i<array.length;i++){
        if(array[i]=='V'){
            array.splice(i,1);
        }
    }
    document.write(array);
}

function bai8() {
    var array = prompt("Nhap mang: ").split(',');
    var temp=0;
    var j;
    var i=0;
        while(i<array.length){
            for (j=0;j+1<array.length;j++) {
                if(array[j]<array[j+1]){
                    temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
            i++;
        }
    document.write(array);
}

function bai9() {
    var arrayA = prompt("Nhap mang a: ").split(',');
    var arrayB = prompt("Nhap mang b: ").split(',');
    arrayC=arrayA+" "+arrayB;
    document.write(arrayC);
}