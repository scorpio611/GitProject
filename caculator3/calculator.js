function calculator(click_id) {
    var result;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    if(click_id=="add"){
        result = parseFloat(n1) + parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    }
else if(click_id=="sub") {
        result = parseFloat(n1) - parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    }

    else if(click_id=="multi") {
        result= parseFloat(n1) * parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    }
else {
        result= parseFloat(n1) / parseFloat(n2);
        document.getElementById("result").innerText = "Result: "+result;
    }
}
