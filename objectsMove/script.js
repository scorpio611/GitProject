/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 50;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveDown = function () {
        this.top += this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    };
}


var hero = new Hero('deadpool.png', 20, 30, 200);

function getKeyAndMove(e){
    //var key_code=e.which||e.keyCode;
    switch(e.keyCode){
        case 37: //left arrow key
            hero.moveLeft();
            break;
        case 38: //Up arrow key
            hero.moveUp();
            break;
        case 39: //right arrow key
            hero.moveRight();
            break;
        case 40: //down arrow key
            hero.moveDown();
            break;
    }
}

function start(){
  if(hero.left < window.innerWidth - hero.size){
      window.addEventListener('keydown', getKeyAndMove);
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();