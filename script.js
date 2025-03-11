function getComputerChoice() {
    values = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}

const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const roundOutput = document.createElement("div");
const resultOutput = document.createElement("div");

body.appendChild(roundOutput);
body.appendChild(resultOutput);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundOutput.textContent = "It's a tie! You chose: " + humanChoice + ". The computer chose: " + computerChoice
    }
    else if ((humanChoice == 'rock' && computerChoice == 'paper') || 
    (humanChoice == 'paper' && computerChoice == 'scissors') ||
    (humanChoice == 'scissors' && computerChoice == 'rock')) {
        roundOutput.textContent = "The computer won! your choice: " + humanChoice + ". The computer chose: " + computerChoice;
        computerScore++;
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper')) {
        roundOutput.textContent = "You won! your choice: " + humanChoice + ". The computer chose: " + computerChoice;
        humanScore++;
    }
}

const buttons = document.querySelectorAll("button");
let gameScore = 0;

const playerScoreboard = document.createElement("div");
const computerScoreboard =  document.createElement("div");
playerScoreboard.style.display = "inline";
playerScoreboard.innerHTML = `<legend>Player</legend>`;
computerScoreboard.style.display = "inline";
computerScoreboard.innerHTML = `<legend>Computer</legend>`;

body.appendChild(playerScoreboard);
body.appendChild(computerScoreboard);

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let humanSelection = button.value;
        if (gameScore >= 5) {
            console.log('End of 5 round game.');
        } else {
            gameScore++;
        }
        playRound(humanSelection, computerSelection);
    });
});