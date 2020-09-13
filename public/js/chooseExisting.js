$('.play').on("click", function(){
    $("#choosePath").attr("style", "display: none")
    $("#charCol").attr("style", "display: block;")

    $(".charStats").empty()
    $.ajax({
        url: "api/characters/id",
        method: "GET"
    }).then(function(res){

        for (let i = 0; i < res.length; i++){
            console.log(res[i])
            const tr = $("<tr>")
            const name = $("<td>")
            const hitpoints = $("<td>")
            const strength = $("<td>")
            const deleteBtn = $("<button>")
            const selectBtn = $("<button>")
            const attack = $("<td>")
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


            tr.attr("class", `type`)
            tr.attr("id", `type${i}`)
            tr.attr("style", "font-size: 14px")
            tr.attr("data-type", res[i].type)
            
            deleteBtn.attr("class", "deleteBtn")
            deleteBtn.attr("data-id", res[i].id)
            deleteBtn.attr("style", "background-color: red;")
            deleteBtn.html("Delete")

            selectBtn.attr("class", "selectBtn")
            selectBtn.attr("data-id", res[i].id)
            selectBtn.attr("style", "background-color: green;")
            selectBtn.html("Select")

            name.text("Name: " + res[i].name)
            attack.text("Attack: " + res[i].attack)
            hitpoints.text("Hitpoints: " + res[i].hitpoints)
            strength.text("Strength: " + res[i].strength)
            tr.append(img, name,attack, hitpoints, strength, selectBtn, deleteBtn)
            $(".charTable").append(tr)

        }
    })
})




