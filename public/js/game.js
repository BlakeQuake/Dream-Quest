

let boardMovement = 0;
let playerNum = 0;
chosenCharacter=""
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


function movePlayer(boardMovement){
   
    $(".currentSpace").each(function(index) {
        
        $(this).empty()
        if ($(this).data("space") == boardMovement) {
            if (chosenCharacter == "Knight"){
            $(this).html('<h1 class="yo" > Youre Here </h1>')
            
            $(".yo").hide()
            $(".yo").fadeIn(4000)}
            if (chosenCharacter == "Wizard"){
                $(this).html('<h1 class="yo" > Youre Here </h1>')
                
                $(".yo").hide()
                $(".yo").fadeIn(4000)}
                if (chosenCharacter == "Archer"){
                    $(this).html('<h1 class="yo" > Youre Here </h1>')
                    
                    $(".yo").hide()
                    $(".yo").fadeIn(4000)}
                    if (chosenCharacter == "Thief"){
                        $(this).html('<h1 class="yo" > Youre Here </h1>')
                        
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





