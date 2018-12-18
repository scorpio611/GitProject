var numbers = parseInt(prompt("Nhap so luong so nguyen to can in: "));
var temp = "";
var count=0;
while (count<numbers) {
    var N,i,grow;
    for(N =2;N<(numbers*numbers);N++){
         grow=0;
         for(i=2;i+1<N;i++) {
            if (N % i === 0 || N % (i + 1) === 0) {
                grow++;
                break;
            }
        }
             if(grow===0 && N!==2){
                 count++;
                 temp += N+" ";
             }
    }
    document.write(temp);
}



