const gameStart = document.querySelector(".game");
const gameRange = document.querySelector(".game-range");
const gameNumber = document.querySelector(".game-number"); 
const result = document.querySelector("#result");
const winOrLost = document.querySelector("#winorlost");

function randomNumber() {
    const gameRangeValue = parseInt(gameRange.value, 10);
    const enemyPick = Math.ceil(Math.random() * gameRangeValue);
    return enemyPick;
}

function whoCanWin(myPick, enemyPick) {
    if (myPick === enemyPick) {
        return (winOrLost.innerText = "Congratulation! You Win!");
    } else {
        return (winOrLost.innerText = "Too bad! You Lost!");
    }
}

function onRangeWrite(event) {
    event.preventDefault();
    const myPick = parseInt(gameNumber.value, 10);
    const enemyPick = randomNumber();
    result.innerHTML = `You choose: ${myPick}, the machine choose: ${enemyPick}.`;
    whoCanWin(myPick, enemyPick);
}

gameStart.addEventListener("submit", onRangeWrite);