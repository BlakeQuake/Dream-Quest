function changeStats(id, win) {
    let character;
    $.ajax({
        url: "/api/characters/" + id,
        method: "GET"

    }).then(function (res) {
        console.log(id, win)
        if (win === true) {
            character = {
                name: res.name,
                attack: res.attack,
                hitpoints: res.hitpoints + 25,
                strength: res.strength + 5,
                type: res.type
            }
        }
        else {
            character = {
                name: res.name,
                attack: res.attack,
                hitpoints: res.hitpoints - 25,
                strength: res.strength - 5,
                type: res.type
            }
        }
        $.ajax({
            url: "/api/characters/" + id,
            method: "PUT",
            data: character,
        }).then(function (res) {
            console.log("saved boi")
    
        })

    })



}



