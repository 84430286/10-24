var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);
var guessField = document.querySelector('.guessField');
// console.log(guessField);
var guessSubmit = document.querySelector('.guessSubmit');
// console.log(guessSubmit);
var guesses=document.querySelector('.guesses');
// console.log(guesses);
var lowOrHi = document.querySelector('.lowOrHi');
// console.log(lowOrHi);
var lastResult = document.querySelector('.lastResult');
// console.log(lastResult);
var guessCount=1;
var resetButton;
guessField.focus();

function checkGuess(){
    
    guesses.textContent +=guessField.value+" ";
    guesses.style.backgroundColor="red";
}
// checkGuess();
