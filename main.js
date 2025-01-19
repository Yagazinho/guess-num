let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);
function checkGuess(){

    function setGameOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame)
    }

    const userGuess = Number(guessField.value)
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations you psychic!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver()
    } else if(guessCount === 10){
        lastResult.textContent = "Game Over!";
        lowOrHi.textContent = "";
        setGameOver()
    } else {
        lastResult.textContent = "Incorrect! try again!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low!";
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();

    function resetGame(){
        guessCount = 1;

        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas){
            resetPara.textContent = "";
        }

        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;

        guessField.value = "";
        guessField.focus();

        lastResult.stle.backgroundColor = "white";

        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}