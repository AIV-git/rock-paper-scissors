function getComputerChoice() {
    values = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}

let humanScore = 1;
let computerScore = 1;

const body = document.querySelector("body");
const roundOutput = document.createElement("div");
const resultOutput = document.createElement("div");

const playerScoreboard = document.createElement("div");
const computerScoreboard =  document.createElement("div");
playerScoreboard.innerHTML = `<legend>Player Score</legend>`;
computerScoreboard.innerHTML = `<legend>Computer Score</legend>`;

body.appendChild(roundOutput);
body.appendChild(resultOutput);
body.appendChild(playerScoreboard);
body.appendChild(computerScoreboard);

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        roundOutput.textContent = "It's a tie! You chose: " + humanChoice + ". The computer chose: " + computerChoice
    }
    else if ((humanChoice == 'rock' && computerChoice == 'paper') || 
    (humanChoice == 'paper' && computerChoice == 'scissors') ||
    (humanChoice == 'scissors' && computerChoice == 'rock')) {
        roundOutput.textContent = "The computer won! your choice: " + humanChoice + ". The computer chose: " + computerChoice;
        computerScoreboard.innerHTML = "Computer Score: " + computerScore++;
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')) {
        roundOutput.textContent = "You won! your choice: " + humanChoice + ". The computer chose: " + computerChoice;
        playerScoreboard.innerHTML = "Player Score: " + humanScore++;
    }
}

const buttons = document.querySelectorAll("button");
let gameScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let humanSelection = button.value;
        playRound(humanSelection);

        if (gameScore >= 5) {
            resultOutput.textContent = 'End of 5 round game.';
            return;
        } else {
            gameScore++;
        }
    });
});