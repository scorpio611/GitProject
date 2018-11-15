var arr = [3, 5, 1, 8, -1, 7, 8];

function minArray(array) {
    if(array.length == 0)
        return ("Mảng rỗng");
    var min = array[0];

    for(var i = 1; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}

alert(minArray(arr));