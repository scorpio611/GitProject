function calculator() {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    document.getElementById("add").onclick = function() {
        result = parseFloat(n1) + parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    };

    document.getElementById("sub").onclick = function() {
        result = parseFloat(n1) - parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    };

    document.getElementById("multi").onclick = function() {
        result= parseFloat(n1) * parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    };

    document.getElementById("divi").onclick = function() {
        result= parseFloat(n1) / parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    };
}
