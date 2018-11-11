var x = [-3,5,1,3,2,10];
var max = x[0];
var position = 0;
for(var i=1;i<x.length;i++){
    if(x[i]>max){
        max = x[i];
        position = i;
    }
}
alert("Gia tri lon nhat la "+max+" nam tai vi tri "+position);