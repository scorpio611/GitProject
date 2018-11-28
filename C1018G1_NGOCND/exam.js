function bai1() {
    var x = prompt("Nhập mảng điểm:").split(',');
    function findMinScore(a) {
        var min=a[0];
        for(var i=1;i<a.length;i++){
            if(a[i]<min) min=a[i];
        }
        alert(`Điểm số thấp nhất là ${min}`);
    }
    findMinScore(x);
}

function bai2() {
    var x = prompt("Nhập mảng số nguyên:").split(',');
    var y = prompt("Nhập số nguyên");
    function tryRemoveFromArray(a,index) {
        var temp= a.length;
        console.log(temp);
        for(var i=0;i<a.length;i++){
            if(a[i]==index) {a.splice(i,1);
            }
        }
        if(temp!=a.length) alert(`Mảng đã loại bỏ phần tử ${index} là ${a}`);
        else alert(`Không tìm thấy phần tử ${index}, trả lại mảng ban đầu ${a}`);
    }
    tryRemoveFromArray(x,y);
}

function bai3() {
    var x = parseInt(prompt("Nhập số nguyên:"));
    function isPrime(a) {
        var check=0;
        if(a<=0){
            alert("Hãy nhập số lớn hơn 0");
            return bai3();
        }
        else if(a==1)alert(`${a} là số nguyên tố`);
        else {
            for(var i=2;i+1<a;i++){
                if(a%i==0 || a%(i+1)==0){check++;break;}
            }
        }
        console.log(check);
        if(check==0)alert(`${a} là số nguyên tố`);
        else alert(`${a} không phải là là số nguyên tố`);
    }
    isPrime(x);
}

function bai4() {
    function Rectangle(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.render = function () {
            var ctx = document.getElementById("canvas").getContext("2d");
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }
    var rect = new Rectangle(10,10,200,100,"#000000");
    rect.render();
}
