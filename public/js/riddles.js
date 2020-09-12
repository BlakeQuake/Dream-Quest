var riddles = [
    
    {question: "I'm tall when I'm young, I'm short when I'm old, what am I?",
    answer: "candle"},

    {question: "I have lakes with no water, mountains with no stones, and cities with no buildings, what am I?",
    answer: "map"},
    
    {question: "I am always hungry and will die if not fed, but whatever I touch I will turn red, what am I?",
    answer: "fire"},

    {question: "what goes through cites and fields but never moves?",
    answer: "roads"},

    {question: "if you drop me I'm sure to crack but give me a smile and i'll smile back, what am I?",
    answer: "mirror"},

    {question: "what fills a room but takes up no space?",
    answer: "light"},

    {question: "I follow you all the time and copy your every move, but you can't touch me or catch me, what am I?",
    answer: "shadow"},

    {question: "the more there is the less you see, what am I?",
    answer: "darkness"},

    {question: "what is so fragile that saying its name breaks it?",
    answer: "silence"},

    {question: "what can you break, even if you never pick it up or touch it, what am I?",
    answer: "promise"},

    {question: " I shave every day, but my beard stays the same. What am I?",
    answer: "barber"},

    {question: "What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?",
    answer: "nothing"},

    {question: "what has roots nobody sees, is taller than trees, up up up it goes and never grows?",
    answer: "mountain"},

    {question: "30 white horses on a red hill, first they tramp, then they stamp, then they stand still?",
    answer: "teeth"},

    {question: "a box without hinges, key or lid yet golden treasuer inside is hid?",
    answer: "egg"},

]

let randomNumber = Math.floor(Math.random() * 15) + 1;
var win = false;
var riddleInsert = document.getElementById("riddle")
var back = document.getElementById("back")
const info = JSON.parse(localStorage.getItem("chosenChar"))
const id = info.id
const field = document.getElementById("answerField")
document.getElementById("submit").addEventListener("click", function() {
    var alertTag = document.getElementById("alert")
    var answer = document.getElementById("answer").value
    const regex = new RegExp(riddles[randomNumber].answer, "gi");
    if (regex.test(answer)) {
        field.style = "display: none;"
        alertTag.innerHTML = "clever hero!"
        win = true
        changeStats(id, win)
        back.innerHTML = "<button> <a href='/game'> Dream Quest </a> </button>"
    }else {
        field.style = "display: none;"
        alertTag.innerHTML = "not clever enough!"
        win = false
        changeStats(id, win)
        back.innerHTML = "<button> <a href='/game'> Dream Quest </a> </button>"


    }
    // alert(regex.test(answer) ? "Clever Hero!" : "Not clever enough!")
    console.log(regex.test(answer));
})



    riddleInsert.innerHTML = riddles[randomNumber].question;
