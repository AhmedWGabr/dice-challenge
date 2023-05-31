let player1Dice = document.querySelector(".img1");
let player2Dice = document.querySelector(".img2");


function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    player1Dice.setAttribute("src", `imgs/dice${randomNumber1}.png`);
    player2Dice.setAttribute("src", `imgs/dice${randomNumber2}.png`);
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
// make the rollDice function run when the button is clicked
document.querySelector("button").addEventListener("click", rollDice);
