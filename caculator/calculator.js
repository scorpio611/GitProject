function addition() {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    result= parseFloat(n1) + parseFloat(n2);
    document.getElementById("result").innerText = "Result: "+result;
}

function subtraction() {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    result= parseFloat(n1) - parseFloat(n2);
    document.getElementById("result").innerText = "Result: "+result;
}

function multiplication() {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    result= parseFloat(n1) * parseFloat(n2);
    document.getElementById("result").innerText = "Result: "+result;
}

function division() {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    result= parseFloat(n1) / parseFloat(n2);
    document.getElementById("result").innerText = "Result: "+result;
}