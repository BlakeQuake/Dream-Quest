const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
let win = false;

var game = () => {
    var wins = 0;
    var loses = 0;
    var winner = document.querySelector(".winner");
    var endGame = document.querySelector(".options");



//start game
    var startGame = () => {
        var playBtn = document.querySelector(".intro button");
        var introScreen = document.querySelector(".intro");
        var match = document.querySelector(".match");

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
//play match
    var playMatch = () => {
        var options = document.querySelectorAll(".options button");
        var playerHand =document.querySelector(".player-hand");
        var computerHand =document.querySelector(".computer-hand");
//computer options
        var computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
        //computer choice
                var computerNumber = Math.floor(Math.random() * 3);
                var computerChoice = computerOptions[computerNumber];
        //compare hands
                compareHands(this.textContent, computerChoice);


        //update images
                playerHand.src = `./RockPaperScissors-images/${this.textContent}.jpeg`;
                computerHand.src = `./RockPaperScissors-images/${computerChoice}.jpeg`;
            });
        });
    };

    var updateScore = () => {
        if (wins === 3) {
            win = true
            changeStats(id, win)
            winner.textContent = "You Win"
            endGame.innerHTML = "<a href='home'>Dream Quest</a>"

        }
        else if (loses === 3) {
            win = false
            changeStats(id, win)
            winner.textContent = "You Lost"
            endGame.innerHTML = "<a href='home'>Dream Quest</a>"

        }
        var playerSocre = document.querySelector(".player-score p");
        var computerSocre = document.querySelector(".computer-score p");
        playerSocre.textContent = wins;
        computerSocre.textContent = loses;
    }

    var compareHands = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            winner.textContent = "tie";
            return;
        }
        
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors'){
                winner.textContent = "you win"
                wins++;
                updateScore();
                return;
            }else {
                winner.textContent = "you lose"
                loses++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'rock'){
                winner.textContent = "you win"
                wins++;
                updateScore();
                return;
            }else {
                winner.textContent = "you lose"
                loses++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper'){
                winner.textContent = "you win"
                wins++;
                updateScore();
                return;
            }else {
                winner.textContent = "you lose"
                loses++;
                updateScore();
                return;
            }
        }
    }



//call all inner function
startGame();
playMatch();
};
//start the game function
game();