/**
 * Created by Session3 on 8/10/16.
 */
var target;
var guessInput;
var guessInputText;
var finished = false;
var guesses= 0;

function doGame () {
    var randomNumber = Math.random() * 100;
    var randomNumberInteger = Math.floor(randomNumber);
    target = randomNumberInteger + 1;

    while (!finished) {
        guessInputText = prompt("I am thinking of a number " + "in the range 1 to 100. \n\n" + "What is the number? " );
        guessInput = parseInt(guessInputText);
        guesses += 1;
        finished = checkGuess();
    }}
function checkGuess(){
    if (isNaN(guessInput)){
        alert("You have not entered a number. \n\n" + "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guessInput < 1) ||( guessInput > 100)){
        alert("The number has to be between 1 and 100");
        return false;
    }
    if (guessInput > target){
        alert("Your number is too large.");
        return false;
    }
    if (guessInput < target){
        alert("Your number is too small.");
        return false;
    }
    alert("You got the number! The number was " + target + "\n\nIt took you " + guesses + " guesses to get the number!");
    return true;
}
