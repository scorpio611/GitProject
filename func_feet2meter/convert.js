function footToMeter(foot) {
    document.getElementById("result").innerText = 0.305*foot+" meters";
}
function meterToFoot(meter) {
    document.getElementById("result").innerText = 3.279*meter+" foots";
}
function main() {
    var radio = document.getElementsByName('measure');
    for(var i=0;i<radio.length;i++){
        if(radio[i].checked) {
            if(radio[i].value==="meter"){
                meterToFoot(document.getElementById("text").value);
            }
            else{
                footToMeter(document.getElementById("text").value);
            }
        }
    }

}
main();