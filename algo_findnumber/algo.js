function findNumber(array, number) {
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]==number){
            count++;
        }
    }
    document.write("<br><br>"+"Value "+number+" appear "+count+" times"+"<br>");
}

function dispArr(array) {
    for (var i = 0; i < array.length; ++i) {
        document.write(array[i] + " ");
        if(i%10===0){
            document.write("<br>");
        }
    }
    if(i%10!==0){
        document.write("<br>");
    }
}

var numbers = [];
for(var i=0; i<100; ++i){
    numbers[i] = Math.floor(Math.random() * 101);
}

var index = parseInt(prompt("Enter a value to search for:"));
dispArr(numbers);
findNumber(numbers, index);
