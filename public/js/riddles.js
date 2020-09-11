var riddles = [
    
    {question: "im tall when im young, im short when im old, what am i?",
    answer: "candle"},

    {question: "i have laskes with no water, mountains with no stones and cities with no buildings, what am i?",
    answer: "map"},
    
    {question: "i am always hungray and will die if not fed, but wjatever i touch i will turn red, what am i?",
    answer: "fire"},

    {question: "what goes throuh cites and fields bu never moves?",
    answer: "roads"},

    {question: "if you drop me im sure to crack but give me a smile and ill smile back, what am i?",
    answer: "mirror"},

    {question: "what fills a room but takes up no space?",
    answer: "light"},

    {question: "i follow you all the time and copy your evry move, but you cant touchme or catch me, what am i?",
    answer: "shodow"},

    {question: "the more there is the less you see, what am i?",
    answer: "darkness"},

    {question: "what is so fragile that saying its name breaks it?",
    answer: "silence"},

    {question: "what can you break, even if you never pick it up or touch it, what am i?",
    answer: "promise"},

    {question: " I shave every day, but my beard stays the same. What am i?",
    answer: "barber"},

    {question: "What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?",
    answer: "nothing"},

    {question: "what has roots nobody sees, is taller than trees, up up up it goes and never grows?",
    answer: "mountain"},

    {question: "30 whits horses on a red hill, first they tramp, then they stamp, then they stand still?",
    answer: " teeth"},

    {question: "a box without hinges, key or lid yet golden treasuer inside is hid?",
    answer: "egg"},

]

let randomNumber = Math.floor(Math.random() * 17);
var win = false;
var riddleInsert = document.getElementById("riddle")
var back = document.getElementById("back")
const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
document.getElementById("submit").addEventListener("click", function() {
    var alertTag = document.getElementById("alert")
    var answer = document.getElementById("answer").value
    const regex = new RegExp(riddles[randomNumber].answer, "gi");
    if (regex.test(answer)) {
        alertTag.innerHTML = "clever hero!"
        win = true
        changeStats(id, win)
        back.innerHTML = "<button> <a href='/game'> Dream Quest </a> </button>"
    }else {
        alertTag.innerHTML = "not clever enough!"
        win = false
        changeStats(id, win)
        back.innerHTML = "<button> <a href='/game'> Dream Quest </a> </button>"


    }
    // alert(regex.test(answer) ? "Clever Hero!" : "Not clever enough!")
    console.log(regex.test(answer));
})



    riddleInsert.innerHTML = riddles[randomNumber].question;
