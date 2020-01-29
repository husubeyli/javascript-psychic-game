let compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0;
let losses = 0;
let guessChoicess = [];
let numGuess = 9;

document.onkeyup = function(event){
    let userGuess = event.key;
    let computerGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
    let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

if (options.indexOf(userGuess) > -1){
    if (userGuess === computerGuess){
        wins++;
        numGuess = 9;
        guessChoicess= [];
    }
    if ( userGuess !== computerGuess){
        numGuess --;
        guessChoicess.push(userGuess)
    }
    if ( numGuess === 0){
        numGuess = 9;
        losses++;
        guessChoicess = [];
    }

var html = 
"<h1> The Psychic Game </h1>" +
"<p>Guess what letter I'm thinking of!</p>" + 
"<p>Wins: " + wins + "</p>" + 
"<p>Loses: " + losses + "</p>" +
"<p>Guesses Left: " + numGuess + "</p>" +
"<p>Your Guesses so far: " + guessChoicess.join(", ") + "</p>"
document.querySelector("#game").innerHTML = html;

}
};