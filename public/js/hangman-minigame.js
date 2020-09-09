var hangmanWords = [
    "warrior",
    "wizard",
    "ranger",
    "thief",
    "overlord"
]

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
    document.getElementById(choosenLetter).setAttribute('disabled', ture);

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
    document.getElementById('hangmanPic').src = ' ./hangman-images/' + mistakes + ' .png'
}

function checkIfGameWon(){
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Survived!';
    }
}

function checkIfGameLost(){
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'the answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexof(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML= mistakes;
}

document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();