$(".myModal").modal('show');

let charInfo = getChar();
function getChar() {
    return localStorage.getItem("chosenChar") ? JSON.parse(localStorage.getItem("chosenChar")) : { chosenCharacter: "", id: null, boardMovement: 0, complete: false }
};
console.log(charInfo);

function roll() {
    var num = Math.floor(Math.random() * 5)
    $("#count").text("You Rolled: " + num)

    return num
}
$(".start").on("click", function () {
    startGame()
})
charInfo.chosenCharacter ? movePlayer(charInfo) : ""

function startGame() {
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
$(".dice").on("click", function () {

    countPlayer()

})

async function countPlayer() {
    let rolledNum = roll();
    charInfo = getChar()
    charInfo.boardMovement += rolledNum
    await localStorage.setItem("chosenChar", JSON.stringify({ ...charInfo }))
    charInfo = getChar()
    console.log(charInfo);
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
    localStorage.setItem("chosenChar", JSON.stringify({ boardMovement: 0, id, chosenCharacter, complete: false }))
})

function movePlayer(moveInfo) {
    console.log(moveInfo);

    $(".currentSpace").each(function (index) {

        $(this).empty()
        if ($(this).data("space") == moveInfo.boardMovement) {

            $(this).html(`<img src="../assets/${moveInfo.chosenCharacter}.png" alt="thief" height="100px" width="100px" class="yo"> `)

            $(".yo").hide()
            $(".yo").fadeIn(4000)





        }

        if (!moveInfo.complete) {
            localStorage.setItem("chosenChar", JSON.stringify({ ...moveInfo, complete: true }))

            if (moveInfo.boardMovement == 5 || moveInfo.boardMovement == 10 || moveInfo.boardMovement == 8 || moveInfo.boardMovement == 15) {
                // alert("Battle With Boss begins ") 

                window.location.replace("/hangman");
            }
            if (moveInfo.boardMovement == 3 || moveInfo.boardMovement == 6 || moveInfo.boardMovement == 17 || moveInfo.boardMovement == 12) {
                // alert("Battle With Boss begins ") 
                window.location.replace("/simon");
            }
            if (moveInfo.boardMovement == 1 || moveInfo.boardMovement == 4 || moveInfo.boardMovement == 9 || moveInfo.boardMovement == 11 || moveInfo.boardMovement == 18 ) {
                // alert("Battle With Boss begins ") 

                window.location.replace("/riddles");
            }
            if (moveInfo.boardMovement == 2 || moveInfo.boardMovement == 7 || moveInfo.boardMovement == 22) {
                // alert("Battle With Boss begins ") 
                window.location.replace("/rps");
            }
            if (moveInfo.boardMovement >= 23) {
                // alert("Battle With Boss begins ") 
                window.location.replace("/boss");
            }
            else {
                // alert("Battle With Boss begins ") 
                updateStats(moveInfo.id, true)
            }
        }


        else {
            console.log("continue")
        }


    })
}

// const previousPage = document.referrer;
// const previousPageArray = previousPage.split("/")
// console.log(previousPageArray[3])





