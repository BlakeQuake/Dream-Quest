let hero;
let shots = [];
let villians = []


function setup() {
    createCanvas(windowWidth, windowHeight)
    hero = new Hero()
    for (var i = 0; i < 10; i++) {
        villians[i] = new Villian(i * 100 + 80, 60)
    }

}

function draw() {
    background(51)
    hero.show()
    hero.move()

    for (var i = shots.length - 1; i >= 0; i--) {
        shots[i].move()
        shots[i].show()
        for (var j = 0; j < villians.length; j++) {
            if (shots[i].hits(villians[j])) {
                // console.log("Ouch")
                shots.splice(i, 1)
                villians.splice(j, 1)
                return

            }
        }


    }

    let edge = false

    for (var i = 0; i < villians.length; i++) {
        villians[i].show()
        villians[i].move()
        if (villians[i].x > width || villians[i].x < 0) {
            edge = true
        }


    }

    if (edge) {
        for (var i = 0; i < villians.length; i++) {
            villians[i].shiftDown();
        }


    }

}

function keyReleased() {
    if (key !== " ") {
        hero.setDir(0)


    }
}

function keyPressed() {

    if (key === " ") {
        let shot = new Shot(hero.x, height - 60)
        shots.push(shot)
        console.log(shots)

    }

    if (keyCode === RIGHT_ARROW) {
        hero.setDir(10)
    }
    else if (keyCode === LEFT_ARROW) {
        hero.setDir(-10)
    }
}

