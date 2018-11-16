function Rectangle(w,h) {
    this.w = w;
    this.h = h;
    this.perimeter = function () {
        return (w+h)*2;
    }
    
    this.area = function () {
        return w*h;
    }
    this.drawRect = function () {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "Orange";
        ctx.fillRect(0,0,w,h);
    }
}

function main() {
    var rect = new Rectangle(parseInt(prompt("Nhap chieu dai: ")), parseInt(prompt("Nhap chieu rong: ")));
    var per = rect.perimeter();
    var area = rect.area();
    document.getElementById("result").innerHTML = "Hinh chu nhat co chu vi la "+per+" va co dien tich la "+area;
    rect.drawRect();

}
main();