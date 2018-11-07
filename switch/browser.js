function bai1() {
    var browser = prompt("Enter your's browser:",'');
    switch (browser) {
        case('Edge'):
            alert("You've got the Edge!");
            break;
        case('Chrome'):
        case('Firefox'):
        case('Safari'):
        case('Opera'):
            alert( 'Okay we support these browsers too' );
            break;
        default:
            alert( 'We hope that this page looks ok!' );
    }
}

function bai2() {
    var a = prompt('a?','');
    switch (a) {
        case(0):
            alert(0);
            break;
        case(1):
            alert(1);
            break;
        case(2):
        case(3):
            alert('2,3');
            break;
    }
}

function bai3() {
    var number = prompt("Nhap so can kiem tra:",0);
    /*if(number>0){
        alert(1);
    }
    else if(number<0){
        alert(-1);
    }
    else {
        alert(0);
    }*/

    switch (true) {
        case(number==0):
            alert(0);
            break;
        case(number>0):
            alert(1);
            break;
        case(number<0):
            alert(-1);
            break;
    }
}
