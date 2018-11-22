function isViettelNumber() {
    var array = document.getElementById("text").value.split(",");
    var isViettel = "";
    var regex = /^(((03966)[0-9]{5}$)|((09)[6-8]|(086)|(03)[2-9])[0-9]{7}$)/gm;

        for(var i =0;i<array.length;i++){
            if(regex.exec(array[i])){
                isViettel+=array[i]+" ";
            }
        }
    document.getElementById("result").innerHTML = isViettel + " la so Viettel"+"<br>";
}