function Temperature(c) {
    this.c = c;

    this.cToF = function () {
        return (1.8 * c + 32);
    }

    this.cToK = function () {
        return (c +273.15);
    }
}

function main() {
    var temp = new Temperature(25);
    var F = temp.cToF();
    var K = temp.cToK();
    document.getElementById("temp").innerHTML = "Do F: "+F+", Do K: "+K;
}
main();