var hangmanWords = [
    "warrior",
    "magic",
    "bowman",
    "stealer",
    "overlord",
    "sword",
    "bow",
    "arrows",
    "staff",
    "daggers"
]

const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
let win = false
let answer = ""
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button
        class = "btn btn-lg btn-primary m-2"
        id = '` + letter + `'
        onclick = "handleGuess('` + letter + `')"
        >
         ` + letter + `
        </button>
    `).join("");
        
document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(choosenLetter) {
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    document.getElementById(choosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(choosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(choosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = ' ../images/hangman-images/hangman-image-' + mistakes + '.png'
}

function checkIfGameWon(){
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Survived!';
        win = true
        changeStats(id, win)
    }
}

function checkIfGameLost(){
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'the answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You did not survive!';
        win = false
        changeStats(id, win)

    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
} 

function updateMistakes(){
    document.getElementById('mistakes').innerHTML= mistakes;
}

document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();