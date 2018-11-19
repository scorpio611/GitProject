
function SwitchButton() {
    this.connectToLamp = function (electricLamp) {
                this.lamp = electricLamp;
                this.lamp.status = this.status;
    };

    this.switchOn = function(){
        this.status = true;
        this.lamp.turnOn();
    };

    this.switchOff = function(){
        this.status = false;
        this.lamp.turnOff();
    }
}

function ElectricLamp() {
    this.turnOn = function () {
        this.status = "On";
    };
    this.turnOff = function () {
        this.status = "Off";
    }
}

var electricLamp = new ElectricLamp();
var switchbtton = new SwitchButton();

switchbtton.connectToLamp(electricLamp);
for(var i =0;i<10;i++){
    switchbtton.switchOn();
    document.write(electricLamp.status+"<br>");
    switchbtton.switchOff();
    document.write(electricLamp.status+"<br>");
}
