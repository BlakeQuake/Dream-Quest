const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
const back = document.getElementById("back")
function deleteChar(charId) {
    $.ajax({
        url: "/api/characters/" + charId,
        method: "DELETE"
    }).then(function (res) {
        console.log(res)
    })
}
function fightBoss() {
    $.ajax({
        url: "/api/characters/" + id,
        method: "GET"
    }).then(function (res) {
        console.log(res)

        attackboss(res)
    })
}
function attackboss(stats) {
    let { hitpoints, strength } = stats;
    let bosshp = 200;
    let bossStr = 50
    function attack() {
        alert(`you attacked boss for ${strength} damage!`);
        bosshp -= strength
        hitpoints -= 50;
        setTimeout(() => alert(`Boss attacked you for ${bossStr} damage! You have ${hitpoints} health left!`), 500)
        if (hitpoints <= 0) {
            alert("You've been defeated")
            deleteChar(id);
            back.style = "display: block;"
            return
        }
        if (bosshp <= 0) {
            alert("You have restored peace to the land, Well Done hero!!!")
            back.style = "display: block;"
            return
        }
    }
    const attackBtn = document.createElement("button");
    attackBtn.innerHTML = "ATTACK";
    attackBtn.addEventListener("click", attack)
    document.getElementById("count").appendChild(attackBtn);
}

back.addEventListener("click", () => {
    const moveInfo = { chosenCharacter: "", id: null, boardMovement: 0, complete: false }
    localStorage.setItem("chosenChar", JSON.stringify(moveInfo))
})

fightBoss()

