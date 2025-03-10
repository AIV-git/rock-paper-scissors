function getComputerChoice() {
    values = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}

const computerSelection = getComputerChoice();

// function getHumanChoice() {
//     let input = prompt("What will you choose?");
//     return input
// }

// const humanSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

const playRoundOutput = document.querySelector("#result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(button.value, computerSelection);
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        playRoundOutput.textContent = "It's a tie! You chose: " + humanChoice + ". The computer chose: " + computerChoice
        //console.log("It's a tie! You chose: " + humanChoice + ". The computer chose: " + computerChoice);
    }
    else if ((humanChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') || 
    (humanChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') ||
    (humanChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock')) {
        playRoundOutput.textContent = "The computer won! your choice: " + humanChoice + ". The computer chose: " + computerChoice.toLowerCase();
        //console.log("The computer won! your choice: " + humanChoice + ". The computer chose: " + computerChoice.toLowerCase());
        computerScore++;
    }
    else if ((humanChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') || 
    (humanChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') ||
    (humanChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper')) {
        playRoundOutput.textContent = "You won! your choice: " + humanChoice + ". The computer chose: " + computerChoice.toLowerCase();
        //console.log("You won! your choice: " + humanChoice + ". The computer chose: " + computerChoice.toLowerCase());
        humanScore++;
    }
}

//playRound(humanSelection, computerSelection);

// function playGame() {
//     let round = 0
//     while (round < 5) {
//         playRound(getHumanChoice(), getComputerChoice());
//         round++
//     }

//     if (humanScore > computerScore) {
//         console.log("You won! your score was " + humanScore + " and the computers score was " + computerScore);
//     } else if (humanScore < computerScore) {
//         console.log("You lost! your score was " + humanScore + " and the computers score was " + computerScore);
//     } else {
//         console.log("It's a draw!" + "your score was " + humanScore + " and the computers score was " + computerScore);
//     }
// }

// playGame()