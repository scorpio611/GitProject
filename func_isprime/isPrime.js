
/*function isPrime(number){
    if(number==3 || number==2){
        return true;
    }
    else{
        for(var i=3;i<number;i++){

        if(number % i === 0 || number % (i - 1) === 0){
            return false;
        }
        else {
            return true;
        }
        }
    }

}

function main() {
    var valNum = prompt("Enter number: ");
    if(isPrime(valNum)){
        document.write(valNum+" is prime");
    }
    else {
        document.write(valNum+" is not prime");
    }

}
main();*/
var result = "";
function isPrime(){
    var i,j,count;
    for( i=1;i<10000;i++) {
         count = 0;
        for (j = 2; j < i/2; j++) {
            if (i % j == 0) {
                count++;
               break;
            }
        }
        if(count==0 && i!=1){
            result+=i+" ";
        }
    }
    document.write(result);
}


isPrime();

