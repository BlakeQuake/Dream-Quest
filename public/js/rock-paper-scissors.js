const game = () => {
    let playerSocre = 0;
    let compScore = 0;

//start game
    const startGame = () => {
        let playBtn = document.querySelector(".intro button");
        let introScreen = document.querySelector(".intro");
        let match = document.querySelector(".match");

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        let options = document.querySelectorAll(".options button");
        let playerHand =document.querySelectorAll(".player-hand");
        let computerHand =document.querySelectorAll(".computer-hand");
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];
        const computerChoice = Math.floor(Math.random() * 3);
        computerOptions[computerChoice]

    } 

    //call all inner function
    startGame();
    // updateScore();
};




//start the game function
game();