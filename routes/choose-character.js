

var db = require("../models")

module.exports = function(router) {

// Create all our routes and set up logic within those routes where required.
router.get("/api/characters", function(req, res){
    db.Character.findAll({
        include: [db.User]
    }).then(function(results){
        res.json(results)
    })
})

router.get("/api/characters/id", function(req, res){
    db.Character.findAll({
        where: {
            UserId: req.session.passport.user.id
        }
  
    }).then(function(results){
        res.json(results)
    })
})

router.post("/api/characters", function (req, res) {

        db.Character.create({
            name: req.body.name,
            attack: req.body.attack,
            hitpoints: req.body.hitpoints,
            strength: req.body.strength,
            type: req.body.type,
            UserId: req.session.passport.user.id
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
