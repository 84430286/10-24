var randomNumber=Math.floor((Math.random()*101));
randomNumber=10;
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
    var userGuess=Number(guessField.value);
    if(guessCount ===1){
        guesses.textContent='历史数字:  ';

    }
    guesses.textContent += userGuess + ' ';
    if(userGuess===randomNumber){
        lastResult.textContent="恭喜你猜对了";
        lastResult.style.backgroundColor="blue";
        lowOrHi.textContent='';
        setGameover()

    }
    else if(guessCount===10){
        lastResult.textContent="游戏结束";
        lowOrHi.textContent='';
        lastResult.style.backgroundColor='red'
        setGameover()
    }
    else{
        lastResult.textContent="猜错了";
        lastResult.style.backgroundColor='red'
        
        if(userGuess>randomNumber){
            lowOrHi.textContent="猜高了"
            lowOrHi.style.backgroundColor="yellow";
        }
        else if(userGuess<randomNumber){
            lowOrHi.textContent="猜低了"
            lowOrHi.style.backgroundColor="yellow";
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
    
   
}
guessSubmit.addEventListener('click', checkGuess);
// function resetGame(){
// var resetButton=document.querySelector("div .resultPares p:last-child")
// console.log(resetButton);
// resetButton.style.display="block"
// }
// checkGuess();
function setGameover(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
