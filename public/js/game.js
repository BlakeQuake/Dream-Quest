
let charInfo = getChar();
function getChar() {
    return localStorage.getItem("chosenChar") ? JSON.parse(localStorage.getItem("chosenChar")) : { chosenCharacter: "", id: null, boardMovement: 0, complete: false }
};
console.log(charInfo);

function roll() {
    var num = Math.floor(Math.random() * 5) + 1
    $("#count").text("You Rolled: " + num)

    return num
}
$(".start").on("click", function () {
    startGame()
})
charInfo.chosenCharacter ? movePlayer(charInfo) : ""

function startGame() {
    $(".myModal").modal('show');
    $(".currentSpace").each(function (index) {
        charInfo.boardMovement = 0
        $(this).empty()
        if ($(this).data("space") == 0) {
            $(this).html('<h1 class="begin" > Youre Here </h1>')
            $(".begin").hide()
            $(".begin").fadeIn(4000)
        }
    })
}
$(".dice").on("click", countPlayer)

function countPlayer() {
    let rolledNum = roll();

    charInfo.boardMovement += rolledNum
    charInfo.complete = false;
    localStorage.setItem("chosenChar", JSON.stringify(charInfo))
    movePlayer(charInfo)
    // console.log(charInfo.boardMovement)
}


$(document).on("click", ".type", function (event) {
    if (charInfo.boardMovement > 0) { return }
    const charDetails = event.target.parentElement
    chosenCharacter = charDetails.getAttribute("data-type")
    console.log(charDetails);
    const id = $(charDetails).children("button").data("id");
    console.log(chosenCharacter, id);
    charInfo = { boardMovement: 0, id, chosenCharacter, complete: false }
    localStorage.setItem("chosenChar", JSON.stringify(charInfo))
})

function movePlayer(moveInfo) {

    console.log(moveInfo);

    $(".currentSpace").each(function (index) {
        console.log(index)

        $(this).empty()
        if ($(this).data("space") == moveInfo.boardMovement) {

            $(this).html(`<img src="../assets/${moveInfo.chosenCharacter}.png" alt="thief" height="100px" width="100px" class="yo"> `)

            $(".yo").hide()
            $(".yo").fadeIn(4000, function(){
                        if (!moveInfo.complete) {
            localStorage.setItem("chosenChar", JSON.stringify({ ...moveInfo, complete: true }))

           if (moveInfo.boardMovement == 5 || moveInfo.boardMovement == 10 || moveInfo.boardMovement == 8 || moveInfo.boardMovement == 15) {
                window.location.replace("/hangman");

            }
            if (moveInfo.boardMovement == 3 || moveInfo.boardMovement == 6 || moveInfo.boardMovement == 17 || moveInfo.boardMovement == 12) {
                window.location.replace("/simon");

            }
            if (moveInfo.boardMovement == 1 || moveInfo.boardMovement == 4 || moveInfo.boardMovement == 9 || moveInfo.boardMovement == 11 || moveInfo.boardMovement == 18 ) {
                window.location.replace("/riddles");

            }
            if (moveInfo.boardMovement == 2 || moveInfo.boardMovement == 7 || moveInfo.boardMovement == 22) {
                window.location.replace("/rps");

            }
            if (moveInfo.boardMovement >= 23) {
                window.location.replace("/boss");

            }
            else {
                changeStats(moveInfo.id, true)
            }
        }
            })





        }
        console.log(moveInfo)




    })
}
fightBoss()
function fightBoss(){
const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
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






