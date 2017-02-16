// 创建障碍
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    this.img = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    checkCollision(this);
    if (this.x >= 505) {
        this.x = Math.random()*200;
    }
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.img), this.x, this.y);
};


// 创建星星
var Star = function(x, y){
    this.x = x;
    this.y = y;
    this.img = 'images/Star.png';

};

Star.prototype.render = function(){
    ctx.drawImage(Resources.get(this.img), this.x, this.y);

};





// 创建玩家

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = 'images/char-boy.png';
};

Player.prototype.update = function() {
   
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.img), this.x, this.y);

};

Player.prototype.handleInput = function(key) {
    switch(key){
            case 'left':
                if(player.x - 101 >= 0){
                    this.x -= 101;
                }
                break;
            case 'right':
                if(player.x + 101 < 505){
                    this.x += 101;
                }
                break;
            case 'up':
                if(player.y -83 >= -40){
                    this.y -= 83;
                }
                break;
            case 'down':
                if(player.y + 83 < 400){
                    this.y += 83;
                }
                break;
        };
};

// 创建碰撞条件
var checkCollision = function(anEnemy) {
    if (
        player.y + 131 >= anEnemy.y + 90
        && player.x + 25 <= anEnemy.x + 88
        && player.y + 73 <= anEnemy.y + 135
        && player.x + 76 >= anEnemy.x + 11) {

        player.x = 202.5;
        player.y = 383;
    }

    
    if (player.y  <= 50 && player.x <= 100) {        
        player.x = 202.5;
        player.y = 383;
        alert('胜利!');

        
    }


};




var allEnemies = [];
var player = new Player(202.5, 383);
var star = new Star(0,-10);

for (var i = 0; i < 3; i++) {
        var enemy = new Enemy(0, i * 85 + 50,Math.random()*150 +150);
        
        allEnemies.push(enemy);
    };






document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});









