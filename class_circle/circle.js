function circle(radius) {
    this.getRadius = function () {
        return radius;
    }

    this.getArea = function () {
        return Math.PI * radius * radius;
    }

}

var myCircle = new circle(5);
var r = myCircle.getRadius();
var area = myCircle.getArea();
alert("radius: " + r + "; area: " + area);
