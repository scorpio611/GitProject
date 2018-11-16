function Battery() {
    this.setEnergy = function (energy) {
        this.energy = energy;
    }

    this.getEnergy = function () {
        return this.energy;
    }

    this.decreaseEnergy = function () {
        if(this.energy>0){
            this.energy--;
        }
    }
}

function flashLamp() {
    this.setBattety = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function(){
        return this.battery.getEnergy();
    }
    this.light = function () {
        if(this.status){
            alert("Light On");
        }
        else {
            alert("Light Off");
        }
    }

    this.turnOn = function () {
        this.status = true;
    }

    this.turnOff = function () {
        this.status = false;
    }
}

var battery = new Battery();
battery.setEnergy(10);

var flashLamp  = new flashLamp();
flashLamp .setBattety(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();

