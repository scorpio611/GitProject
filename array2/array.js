var value = prompt("Nhap gia tri can tim: ");
var x = [-3,5,1,3,2,10];
for(var i=0;i<x.length;i++){
    if (x[i] == value){
        alert("Gia tri "+x[i]+" tim thay tai vi tri "+i);
    }
}