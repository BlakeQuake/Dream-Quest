const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
const paddingRight = "padding-right: 40px;"
    
    $.ajax({
        url: "api/characters/" + id,
        method: "GET"
    }).then(function(res) {
        console.log(res.type)
        const tr = $("<tr>")
        const name = $("<td>").attr("style", paddingRight)
        const hitpoints = $("<td>").attr("style", paddingRight)
        const strength = $("<td>")
        const attack = $("<td>").attr("style", paddingRight)

        name.text("Name: " + res.name)
        attack.text("Attack: " + res.attack)
        hitpoints.text("Hitpoints: " + res.hitpoints)
        strength.text("Strength: " + res.strength)
        tr.append( name, attack, hitpoints, strength)
        $(".displayStats").append(tr)

    })