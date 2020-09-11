const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
function deleteChar(charId) {
    $.ajax({
        url: "/api/characters/" + charId,
        method: "DELETE"
    }).then(function(res){
        console.log(res)
    })
}
function fightBoss(){
        $.ajax({
            url: "/api/characters/" + id,
            method: "GET"
        }).then(function (res) {
            console.log(res)
        
            attackboss(res)
        })
    }
    function attackboss(stats){
        let {hitpoints,strength} = stats;
        let bosshp = 200;
        let bossStr = 50
        function attack(){
            console.log(`you attacked boss for ${strength} damage!`);
            bosshp -= strength
            hitpoints -= 50;
            setTimeout(()=> console.log(`Boss attacked you for ${bossStr} damage! You have ${hitpoints} health left!`), 500)
        if (hitpoints <= 0){
            console.log("You've been defeated")
            deleteChar(id);
        }
        if (bosshp <= 0){
            console.log("You have restored peace to the land, Well Done hero!!!")
        }
        }
        const attackBtn = document.createElement("button");
        attackBtn.innerHTML = "ATTACK";
        attackBtn.addEventListener("click", attack)
        document.getElementById("count").appendChild(attackBtn);
    }

    fightBoss()

    