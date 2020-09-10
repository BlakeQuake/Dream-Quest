$(".myModal").modal('show');

let boardMovement = 0;
let playerNum = 0;
let chosenCharacter= ""
function roll() { 
    var num = Math.floor(Math.random() * 5)
    $("#count").text("You Rolled: " + num)
 
 return num
 }
$(".start").on("click", function(){
startGame()
})

 function startGame(){
    $(".currentSpace").each(function(index) { 
        boardMovement = 0
    $(this).empty()
        if ($(this).data("space") == 0){
        $(this).html('<h1 class="begin" > Youre Here </h1>') 
        $(".begin").hide()
        $(".begin").fadeIn(4000)
}
 })
 }
 $(".dice").on("click", function(){

countPlayer()

})

function countPlayer() {
  let rolledNum = roll();
  boardMovement += rolledNum
  
  movePlayer(boardMovement)
  console.log(boardMovement)
}


$(document).on("click", ".type", function(event){
    if(boardMovement > 0){return}
    const charDetails = event.target.parentElement
    chosenCharacter = charDetails.getAttribute("data-type")

})

function movePlayer(boardMovement){
   
    $(".currentSpace").each(function(index) {
        
        $(this).empty()
        if ($(this).data("space") == boardMovement) {
        
            
           
            
            if (chosenCharacter == "Knight"){
            $(this).html('<img src="../Assets/warrior.png" alt="thief" height="100px" width="100px" class="yo"> ')
            
            $(".yo").hide()
            $(".yo").fadeIn(4000)}
            if (chosenCharacter == "Wizard"){
                $(this).html('<img src="../Assets/wizard.png" alt="thief" height="100px" width="100px" class="yo"> ')
                
                $(".yo").hide()
                $(".yo").fadeIn(4000)}
                if (chosenCharacter == "Archer"){
                    $(this).html('<img src="../Assets/ranger.png" alt="thief" height="100px" width="100px" class="yo"> ')
                    
                    $(".yo").hide()
                    $(".yo").fadeIn(4000)}
                    if (chosenCharacter == "Thief"){
                        $(this).html('<img src="../Assets/thief.png" alt="thief" height="100px" width="100px" class="yo"> ')
                        
                        $(".yo").hide()
                        $(".yo").fadeIn(4000)}
            
            
          
          }
        if (boardMovement == 5 || boardMovement == 10 || boardMovement == 4 ) {
            // alert("Battle With Boss begins ") 
            window.location.replace("/hangman");
    }
        else {
            console.log("continue")
         }

    
    })
}





