var hangmanWords = [
    "warrior",
    "wizard",
    "ranger",
    "thief",
    "overlord"
]

let answer = ""
let wrong = 10;
let mistakes = 0;
let guessed = [];

function randomWord() {
    answer = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    
}

function generateButtons() {
    let buttonHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button
        class = "btn btn-lg btn-primary m-2"
        id = '` + letter + `
        onclick = "handleGuess('` + letter + `')"
        >
         ` + letter + `
        </button>
    `).join("");
        
document.getElementById("keyboard").innerHTML = buttonHTML;

}
randomWord();
generateButtons();
