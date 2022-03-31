import kaboom from "kaboom"


kaboom({
    font: "sinko",
    background: [135, 206, 235]
})

// debug.log("Size: " + height() + "x" + width())

function LOAD_SPRITES_AND_SOUNDS() {
    loadSprite("bean", "sprites/bean.png")
    loadSprite("mark", "sprites/mark.png")
    loadSprite("block", "sprites/grass.png")
    loadSprite("cloud", "sprites/cloud.png")
    loadSprite("bullet", "sprites/bobo.png")
    loadSprite("heal", "sprites/heart.png")
    loadSprite("super", "sprites/lightning.png")
    loadSprite("stone", "sprites/101.png")
    loadSound("sound", "sounds/score.mp3")
    loadSound("explode", "sounds/explode.mp3")
    loadSound("background", "sounds/OtherworldlyFoe.mp3")
    loadSound("heal", "sounds/mystic.mp3")
    loadSound("super", "sounds/danger.mp3")
}

LOAD_SPRITES_AND_SOUNDS()
    
play("background", {
    loop: true
})    

username = prompt("Player 1's Username")
username1 = prompt("Player 2's Username")

if (username === null || username === "") {
    username = "NO USERNAME HUH?"
}

if (username1 === null || username1 === "") {
    username1 = "NO USERNAME HUH?"
}

function assets() {
    add([ // block 1
        sprite("block"),
        pos(width() - 200, height() - 100),
        area(),
        solid()
    ])

    add([ // block 2
        sprite("block"),
        pos(width() - 300, height() - 200),
        area(),
        solid()
    ])

    add([ // block 3
        sprite("block"),
        pos(width() - 500, height() - 100),
        area(),
        solid()
    ])

    add([ // block 4
        sprite("block"),
        pos(width() - 600, height() - 300),
        area(),
        solid()
    ])

    add([ // block 5
        sprite("block"),
        pos(width() - 800, height() - 100),
        area(),
        solid()
    ])

    add([ // block 6
        sprite("block"),
        pos(width() - 900, height() - 300),
        area(),
        solid()
    ])

    add([ // block 7
        sprite("block"),
        pos(width() - 1100, height() - 400),
        area(),
        solid()
    ])

    add([ // block 8
        sprite("block"),
        pos(width() - 1100, height() - 200),
        area(),
        solid()
    ])

    add([ // block 9
        sprite("block"),
        pos(width() - 1350, height() - 300),
        area(),
        solid()
    ])

    add([ // block 9.2
        sprite("block"),
        pos(width() - 1300, height() - 100),
        area(),
        solid()
    ])

    add([ // block 10
        sprite("block"),
        pos(width() - 1600, height() - 100),
        area(),
        solid()
    ])

    add([ // block 11
        sprite("block"),
        pos(width() - 1700, height() - 200),
        area(),
        solid()
    ])

    add([ // block 12
        sprite("block"),
        pos(width() - 1800, height() - 100),
        area(),
        solid()
    ])

    add([ // block 13
        sprite("block"),
        pos(width() - 2000, height() - 100),
        area(),
        solid()
    ])

    add([ // block 14
        sprite("block"),
        pos(width() - 2100, height() - 300),
        area(),
        solid()
    ])

    add([ // block 15
        sprite("block"),
        pos(width() - 2300, height() - 100),
        area(),
        solid()
    ])

    add([ // block 16
        sprite("block"),
        pos(width() - 2400, height() - 300),
        area(),
        solid()
    ])

    add([ // block 17
        sprite("block"),
        pos(width() - 2500, height() - 400),
        area(),
        solid()
    ])

    add([ // block 18
        sprite("block"),
        pos(width() - 2600, height() - 200),
        area(),
        solid()
    ])

    add([ // block 19
        sprite("block"),
        pos(width() - 2700, height() - 300),
        area(),
        solid()
    ])

    add([ // block 20
        sprite("block"),
        pos(width() - 2900, height() - 100),
        area(),
        solid()
    ])

   add([ // block 21
        sprite("block"),
        pos(width() - 3000, height() - 300),
        area(),
        solid()
    ])
    
    //////////////////////////// clouds
    add([
        sprite("cloud"),
        pos(width() - 1900, height() - 600)
    ])
    
    add([
        sprite("cloud"),
        pos(width() - 1200, height() - 600)
    ])

    add([
        sprite("cloud"),
        pos(width() - 500, height() - 600)
    ])
}

scene("main", () => {

    assets()

    let dead = false;
    let sup = false;
    let sup1 = false;
    let added = false;
    let added1 = false;

    const bean = add([
        sprite("bean"),
        body(),
        area(),
        pos(20, 40),
        "bean"
    ])

    const mark = add([
        sprite("mark"),
        body(),
        area(),
        pos(width() - 80, 40),
        "mark"
    ])

    const name = add([
        text(username),
        pos(bean.pos.x, bean.pos.y),
        scale(2),
    ])

    const name1 = add([
        text(username1),
        pos(mark.pos.x, mark.pos.y),
        scale(2)
    ])

    const health = add([
        text("100"),
        pos(70, 24),
        scale(2),
        { value: 100 }
    ])

    const health1 = add([
        text("100"),
        pos(width() - 100, 24),
        scale(2),
        { value: 100 }
    ])

    onUpdate(() => {
        if (health.value > 0) {
            name.pos.x = bean.pos.x + 10,
            name.pos.y = bean.pos.y - 20
        }
        else {
            destroy(name);
            if (health.value <= 0) {
                if (added === false) {
                    add([
                        sprite("stone"),
                        scale(0.4),
                        pos(bean.pos),
                        area(),
                        body(),
                        added = true
                    ])
                }
            }
        }
        
        if (health1.value > 0) {
            name1.pos.x = mark.pos.x + 10,
            name1.pos.y = mark.pos.y - 20
        }
        else {
            destroy(name1);
            if (health1.value <= 0) {
                if (added1 === false) {
                    add([
                        sprite("stone"),
                        scale(0.4),
                        pos(mark.pos),
                        area(),
                        body(),
                        added1 = true
                    ])
                }
            }
        }
    })

    add([ // Ground
        rect(width(), height()),
        pos(0, height()),
        area(),
        solid(),
        "ground"
    ])

    add([ // Roof
        rect(width(), 0),
        pos(0, 0),
        area(),
        solid()
    ])

    add([ // Left Wall
        rect(0, height()),
        pos(0, 0),
        area(),
        solid()
    ])

    add([ // Right Wall
        rect(0, height()),
        pos(width(), 0),
        area(),
        solid()
    ])

    // Bean Movements
    onKeyDown("a", () => bean.move(-400, 0))

    onKeyDown("d", () => bean.move(400, 0))

    onKeyDown("w", () => {
        if (bean.isGrounded()) {
            bean.jump()
        }
    })

    // Mark Movements
    onKeyDown("left", () => mark.move(-400, 0))

    onKeyDown("right", () => mark.move(400, 0))

    onKeyDown("up", () => {
        if (mark.isGrounded()) {
            mark.jump()
        }
    })
    
    // Shooting
    onKeyPress("f", () => {
        if (health.value > 0) {
            add([
                sprite("bullet"),
                pos(bean.pos),
                move(RIGHT, 250),
                cleanup(),
                color(rgb(rand(0, 255), rand(0, 255), rand(0, 255))),
                area(),
                play("sound"),
                "beanshoot"
            ])
        }
    })

    onKeyPress("l", () => {
        if (health1.value > 0) {
            add([
                sprite("bullet"),
                pos(mark.pos),
                move(LEFT, 250),
                cleanup(),
                color(rgb(rand(0, 255), rand(0, 255), rand(0, 255))),
                area(),
                play("sound"),
                "markshoot"
            ])
        }
    })

    onKeyPress("`", () => {
        fullscreen(!fullscreen())
    })

    bean.onCollide("markshoot", (markshoot) => {
        addKaboom(bean.pos),
        destroy(markshoot),
        shake(30);
        if (sup1 === false) {
            health.value -= 10
        }
        if (sup1 === true) {
            health.value -= 5,
            sup1 = false
        }
        health.text = health.value,
        play("explode");
        if (health.value <= 0) {
            health.text = "dead",
            destroy(bean),
            dead = true,
            destroyAll("beanshoot"),
            add([
                text("Right Wins"),
                pos(width() - (width() / 2) - 160, height() - (height() / 2)),
                scale(4)
            ])
        }
    })

    mark.onCollide("beanshoot", (beanshoot) => {
        addKaboom(mark.pos),
        destroy(beanshoot),
        shake(30);
        if (sup === false) {
            health1.value -= 10
        }
        if (sup === true) {
            health1.value -= 5,
            sup = false
        }
        health1.text = health1.value
        play("explode");
        if (health1.value <= 0) {
            health1.text = "dead",
            destroy(mark),
            dead = true,
            destroyAll("markshoot"),
            add([
                text("Left Wins"),
                pos(width() - (width() / 2) - 160, height() - (height() / 2)),
                scale(4)
            ])
        }
    })

    bean.onCollide("heal", (heal) => {
        play("heal"),
        destroy(heal),
        health.value += 10,
        health.text = health.value
    })
    
    mark.onCollide("heal", (heal) => {
        play("heal"),
        destroy(heal),
        health1.value += 10,
        health1.text = health1.value
    })

    bean.onCollide("super", (a) => {
        play("super"),
        destroy(a),
        sup = true
    })

    mark.onCollide("super", (a) => {
        play("super"),
        destroy(a),
        sup1 = true
    })

    function rain() {
        if (dead === false) {
            add([
                sprite("bullet"),
                area(),
                color(rgb(rand(0, 255), rand(0, 255), rand(0, 255))),
                pos(rand(width() - width(), width()), 0),
                move(DOWN, 300),
                cleanup(),
                "beanshoot",
                "markshoot"
            ])
            wait(rand(1, 2), rain)
        }
    }

    rain()
    
    function spawn_heal() {
        if (dead === false) {
            add([
                sprite("heal"),
                area(),
                pos(width() - randi(width() / 4, (width() / 4) * 3), height() - randi(height() / 4, (height() / 4) * 3)),
                body(),
                "heal"
            ])
        }
        wait(rand(10, 20), spawn_heal)
    }

    spawn_heal()

    function SUPER() {
        if (dead === false) {
            add([
                sprite("super"),
                area(),
                pos(width() - randi(width() / 4, (width() / 4) * 3), height() - randi(height() / 4, (height() / 4) * 3)),
                body(),
                "super"
            ])
        }
        wait(rand(10, 20), SUPER)
    }

    SUPER()
    
})

go("main")