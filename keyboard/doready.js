function dilen() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function dixuong() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

function disangtrai() {
    var elment = document.getElementById("nobita");
    elment.style.left = parseInt(elment.style.left) - 5 + 'px';
}

function disangphai() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function dichuyen(evt) {
    switch (evt.keyCode) {
        case(37):
            disangtrai();
            break;
        case(39):
            disangphai();
            break;
        case(38):
            dilen();
            break;
        case(40):
            dixuong();
            break;
    }
}

function doready() {
    window.addEventListener('keydown', dichuyen);
}