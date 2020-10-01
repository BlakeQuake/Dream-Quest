$("#pause").on("click", function() {
    $(".pauseModal").modal("show")
})

$("#quit").on("click", function() {
    console.log("hello")
    const moveInfo = { chosenCharacter: "", id: null, boardMovement: 0, complete: false }
    localStorage.setItem("chosenChar", JSON.stringify(moveInfo))
    window.location.replace("/game");


})