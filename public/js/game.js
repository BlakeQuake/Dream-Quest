
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

    if (moveInfo.boardMovement >= 23){
        moveInfo.boardMovement = 23;
        localStorage.setItem("chosenChar", JSON.stringify(moveInfo))
    }

    console.log(moveInfo);

    $(".currentSpace").each(function (index) {
        console.log(index)

        $(this).empty()
        if ($(this).data("space") == moveInfo.boardMovement) {


            $(this).html(`<img src="/images/${moveInfo.chosenCharacter}.png" alt="choosen character" height="100px" width="100px" class="yo"> `)

            $(".yo").hide()
            $(".yo").fadeIn(2000, function(){
                        if (!moveInfo.complete) {
            localStorage.setItem("chosenChar", JSON.stringify({ ...moveInfo, complete: true }))

           if (moveInfo.boardMovement == 22 || moveInfo.boardMovement == 10 || moveInfo.boardMovement == 11 || moveInfo.boardMovement == 19) {
                window.location.replace("/hangman");

            }
            else if (moveInfo.boardMovement == 2 || moveInfo.boardMovement == 9 || moveInfo.boardMovement == 12 || moveInfo.boardMovement == 18) {
                window.location.replace("/simon");

            }
            else if (moveInfo.boardMovement == 3 || moveInfo.boardMovement == 8 || moveInfo.boardMovement == 6 || moveInfo.boardMovement == 17 || moveInfo.boardMovement == 20 ) {
                window.location.replace("/riddles");

            }
            else if (moveInfo.boardMovement == 4 || moveInfo.boardMovement == 7 || moveInfo.boardMovement == 14) {
                window.location.replace("/rps");

            }
            else if (moveInfo.boardMovement == 5 || moveInfo.boardMovement == 13 || moveInfo.boardMovement == 15 || moveInfo.boardMovement == 16 || moveInfo.boardMovement == 21 || moveInfo.boardMovement == 1) {
                alert("Gift! You Have Attained 25 hitpoints and 8 Strength Lad!")
                changeStats(moveInfo.id, true)
            }
            else if (moveInfo.boardMovement == 0) {
                console.log("hellow")
            }
            else {
                window.location.replace("/boss");



            }
        }
            })





        }
        console.log(moveInfo)




    })
}





