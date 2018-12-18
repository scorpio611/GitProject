


function searchword() {
    var english = ["dog","cat","car","board","paper","mobile","laptop"];
    var vietnamese = ["chó","mèo","ô tô","bảng","giấy","điện thoại","máy tính xách tay"];
    var word = document.getElementById("text").value;
    var count=0;
    for(var i=0;i<english.length;i++){
        if(word===english[i]){
            document.getElementById("result").innerText = "Từ cần tìm là "+ vietnamese[i];
            count =1;
        }
        if(count!=1){
            document.getElementById("result").innerText = "Không tìm thấy từ "+word;
    }
    }
}
