

function Apple() {
    this.weight = 10;
    this.decrease = function () {
            return this.weight--;
    };

    this.isEmpty = function () {
        if(this.weight<=0){
            return true;
        }
    }

    this.getWeight = function () {
        return this.weight;
    }
}

function Human() {

    this.setName = function (name) {
        this.name = name;
    };

    this.getName = function () {
        return this.name;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.isMale = function () {
        return this.gender === 1;
    };



    this.checkApple = function (apple) {
        if (!apple) return true;
    };

    this.eat = function (apple) {
        if(this.checkApple()) {
  //          while (!apple.isEmpty()) {
                this.setWeight(this.weight+=1);
                apple.decrease();
         //  }
        }
        else {
            return false;
        }
    };

    this.say = function (word) {
        console.log(word);
    }
}

var apple = new Apple();
var adam = new Human();
var eva = new Human();
adam.setName("Adam");
eva.setName("Eva");
adam.setWeight(80);
eva.setWeight(50);
adam.setGender(1);
eva.setGender(0);
adam.checkApple(apple.isEmpty());
eva.checkApple(apple.isEmpty());

while (!apple.isEmpty()) {
    adam.eat(apple);
    eva.eat(apple);
}


adam.say(adam.getName()+" ate the apple, now i have "+adam.getWeight()+"kg");
eva.say(eva.getName()+" ate the apple, now i have "+eva.getWeight()+"kg");
console.log(apple.getWeight());


