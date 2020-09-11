$('.dropdown').on("click", function(){

    $(".charStats").empty()
    $.ajax({
        url: "api/characters/id",
        method: "GET"
    }).then(function(res){

        for (let i = 0; i < res.length; i++){
            console.log(res[i])
            const div = $("<div>")
            const name = $("<p>")
            const hitpoints = $("<p>")
            const strength = $("<p>")
            const deleteBtn = $("<button>")
            const attack = $("<p>")
            let img;


            if (res[i].type === "magic"){
                 img = $("<img src = '../images/magic.png' height = '50px' width = '60px'>")

            }
            else if (res[i].type === "stealer"){
                 img = $("<img src = '../images/stealer.png' height = '50px' width = '60px'>")

            }
            else if (res[i].type === "bowman"){
                 img = $("<img src = '../images/bowman.png' height = '50px' width = '60px'>")

            }
            else{
                 img = $("<img src = '../images/warrior.png' height = '50px' width = '60px'>")

            }


            div.attr("class", "type")
            div.attr("style", "font-size: 14px")
            div.attr("data-type", res[i].type)
            deleteBtn.attr("class", "deleteBtn")
            deleteBtn.attr("data-id", res[i].id)
            name.text("Name: " + res[i].name)
            deleteBtn.html("Delete")
            attack.text("Attack: " + res[i].attack)
            hitpoints.text("Hitpoints: " + res[i].hitpoints)
            strength.text("Strength: " + res[i].strength)
            div.append( name,attack, hitpoints, strength, deleteBtn)
            $(".charStats").append(img)
            $(".charStats").append(div)

        }
    })
})


