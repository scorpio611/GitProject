var x=0;
var array = new Array();
function add_element_to_array() {
    array[x] = document.getElementById("txtValue").value;
    alert("Phan tu "+array[x]+" duoc them vao vi tri "+x);
    x++;
    document.getElementById("txtValue").value = "";
}

function display_array() {
    var e = "<hr/>";
    for(var i=0;i<array.length;i++){
        e += "Phan tu " + i + "=" + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}