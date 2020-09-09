$(document).on("click", ".type", function(event){
    const charDetails = event.target.parentElement
    console.log(charDetails)
    const type = charDetails.getAttribute("data-type")
    console.log(type)

})

const type = require("./chooseCharacterImg")

console.log(type)