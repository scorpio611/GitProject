
function getValue(x) {
    document.getElementById("value").value += document.getElementById(x).value;
}

function clearResult() {
    document.getElementById("value").value = "";
}
function result() {
    document.getElementById("value").value = eval(document.getElementById("value").value);
}