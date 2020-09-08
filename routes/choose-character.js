

var db = require("../models")


const characterAttack = [
    {
        type: "theif",
        attacks: [{attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}],
        url: "https://sketchfab.com/models/664f685ef3c742a784a3cafcc1b75d4d/embed?autospin=0.2&amp;autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"

    },
    {
        type: "knight",
        attacks: [{attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}],
        url: "https://sketchfab.com/models/e5ab9d2e39f446639cc76d8467ea666f/embed?autostart=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_watermark=0&amp;ui_watermark_link=0"


    },
    {
        type: "warrior",
        attacks: [{attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}],
        url: "https://sketchfab.com/models/ef019b7a32054ea69f2058fccee71a5e/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"

    },
    {
        type: "wizard",
        attacks: [{attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}, {attack: "wergerwre"}],
        url: "https://sketchfab.com/models/7c70966c90f74102825f7dba4871f4c9/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"

    }
]
module.exports = function(router) {

// Create all our routes and set up logic within those routes where required.
router.get("/knight", function (req, res) {
    res.render("create", {
        attack: characterAttack[1].attacks,
        url: characterAttack[1].url
    });


});
router.get("/wizard", function (req, res) {
    res.render("create", {
        attack: characterAttack[3].attacks,
        url: characterAttack[3].url

    });
});
router.get("/thief", function (req, res) {
    res.render("create", {
        attack: characterAttack[0].attacks,
        url: characterAttack[0].url

    });
});
router.get("/warrior", function (req, res) {
    res.render("create", {
        attack: characterAttack[2].attacks,
        url: characterAttack[2].url

    });
});

router.post("/api/characters", function (req, res) {
    db.Character.create({
        name: req.body.name,
        attack: req.body.attack,
        hitpoints: req.body.hitpoints,
        strength: req.body.strength,
        character_img: req.body.character_img
    }).then(function (results) {
        res.json(results)
    })
});

router.put("/api/characters/:id", function (req, res) {
    db.Character.update({
        where: {
            id: req.params.id
        }
    },
        {
            name: req.body.name,
            attack: req.body.attack,
            hitpoints: req.body.hitpoints,
            strength: req.body.strength,
            character_img: req.body.character_img
        }).then(function (results) {
            res.json(results)
        })
});

router.delete("/api/characters/:id", function (req, res) {
    db.Character.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        res.json(results)
    })
});
}
