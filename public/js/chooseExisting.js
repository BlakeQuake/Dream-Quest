$('.dropdown').on("click", function(){
    $(".charStats").empty()
    $.ajax({
        url: "api/characters/id",
        method: "GET"
    }).then(function(res){
        console.log(res)
        console.log(res.length)
        for (let i = 0; i < res.length; i++){
            console.log(res[i])
            const div = $("<div>")
            const name = $("<p>")
            const hitpoints = $("<p>")
            const strength = $("<p>")
            const deleteBtn = $("<button>")
            const attack = $("<p>")
            // const img = $("<img src = '../../assets/wizard.png' height = '10px' width = '10px'>")

            // if (res[i].type === "Wizard"){
            // }
            div.attr("class", "type")
            div.attr("style", "font-size: 14px")
            div.attr("data-type", res[i].type)
            name.text("Name: " + res[i].name)
            deleteBtn.html("Delete")
            attack.text("Attack: " + res[i].attack)
            hitpoints.text("Hitpoints: " + res[i].hitpoints)
            strength.text("Strength: " + res[i].strength)
            div.append( name,attack, hitpoints, strength, deleteBtn)
            $(".charStats").append(div)
            // $("charImg").html(img)

        }
    })
})
