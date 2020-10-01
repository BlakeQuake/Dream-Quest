function Hero() {
    this.x = width/2;

    this.xdir = 0

    this.show = function()  {
        fill(255)
        rectMode(CENTER);
        rect(this.x, height-20, 20, 60)
    }

    this.setDir = function(dir) {
        this.xdir = dir
    }

    this.move = function() {
        this.x += this.xdir
    }

}

function Villian(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 30;

    this.xdir = 4;

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.radius

    }

    this.move = function() {
        this.x = this.x + this.xdir

    }


    this.show = function()  {
        fill(255, 0, 200)
        rectMode(CENTER);
        ellipse(this.x, this.y, this.radius*2.3, this.radius*2)
    }


}

function Shot(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 8;


    this.show = function()  {
        noStroke()
        fill(150, 0, 255)
        ellipse(this.x, this.y, this.radius*2, this.radius*2)
    }

    this.move = function() {
        this.y = this.y - 5;
    }

    this.hits = function(villian) {
        var distance = dist(this.x, this.y, villian.x, villian.y)

        if (distance < this.radius + villian.radius) {
            return true
        }
        else {
            return false;
        }
    }


}