function bai1() {
    var a = parseInt(prompt("Enter a:"));
    var b = parseInt(prompt("Enter b:"));
    if(a%b==0){
        alert(a+"chia het cho"+b);
    }
    else {
        alert(a+"khong chia het cho"+b);
    }
}

function bai2() {
    var a = parseInt(prompt("Nhap tuoi"));
    if(a>=15){
        alert("Du tuoi vao lop 10");
    }
    else {
        alert("Khong du tuoi vao lop 10");
    }
}

function bai3() {
    var a = parseInt(prompt("Nhap so can kiem tra"));
    if(a>0){
        alert(a+" lon hon 0");
    }
    else {
        alert(a+" nho hon 0");
    }
}

function bai4() {
    var a = parseInt(prompt("Enter a:"));
    var b = parseInt(prompt("Enter b:"));
    var c = parseInt(prompt("Enter c:"));
    if(a>b && a>c){
        alert(a+" la so lon nhat");
    }
    else if(b>a && b>c) {
        alert(b+" la so lon nhat");
    }
    else {
        alert(" c la so lon nhat");
    }
}

function bai5() {
    var a = parseInt(prompt("Nhap diem bai kiem tra"));
    var b = parseInt(prompt("Nhap diem thi giua ky:"));
    var c = parseInt(prompt("Nhap diem thi cuoi ky"));
    var tb = parseFloat((a*2+b*2+c*3)/3);
    if(8<tb<10){
        alert("Xep Hang Gioi");
    }
    else if(6<=tb<=8)
    {
        alert("Xep Hang Kha");
    }
    else {
        alert("Xep Hang Trung Binh");
    }
}

function bai6() {
    var a = parseInt(prompt("Nhap doanh so"));
    var b;
    if(a<5000){
        b = a*0.02;
        alert("Hoa hong nhan duoc la "+b);
    }
    else if(5000<=a<=10000){
        b=a*0.03;
        alert("Hoa hong nhan duoc la "+b);
    }
    else if(10000<a<15000){
        b=a*0.04;
        alert("Hoa hong nhan duoc la "+b);
    }
    else if(15000<=a){
        b=a*0.05;
        alert("Hoa hong nhan duoc la "+b);
    }
}

function bai7() {
    var a = parseInt(prompt("Nhap so gio goi:"));
    var b = 2000;
    var c = 4000;
    var d = 8000;
    if(a<30){
        var money1 = a*b;
        alert("So tien cuoc dien thoai la: "+money1);
    }
    else if(30<=a<=50){
        var money2 = a*c;
        alert("So tien cuoc dien thoai la: "+money2);
    }
    else{
        var money3 = a*d;
        alert("So tien cuoc dien thoai la: "+money3);
    }
}
