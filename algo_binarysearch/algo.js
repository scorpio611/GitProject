var array =[],b=10000;while(b--)array[b]=b+1;

function binarySearch() {
    var num = document.getElementById("number").value;
    var start=0;
    var end=array.length-1;
    var result=0;

        while(end>=start)  {
            var middle=Math.round(start+(end-start)/2);
            if(num==array[middle]){
                result=middle;
                break;
            }
            else if(num>array[middle]){
                start=middle+1;
            }
            else  {
                end=middle-1;
            }
            result=-1;
        }
     //   console.log("Binary Search Result:",result);
}

function linearSearch() {
    var num2 = document.getElementById("number").value;
    for(var i=0;i<array.length;i++){
        if(num2==array[i]){
            return i;
           // console.log("Linear Search Result:",i);
        }
    }
}

function main() {
    console.time("Binary Search:");
    binarySearch();
    console.timeEnd("Binary Search:");

    console.time("Linear Search:");
    linearSearch();
    console.timeEnd("Linear Search:");

}

