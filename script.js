function getComputerChoice() {
    values = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * values.length);
    return values[random]
}

function getHumanChoice() {
    let input = prompt("What will you choose?");
    //console.log(input);
    return input
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log("It's a tie!")
    }
    else if ((humanChoice.toLowerCase() == 'rock') && (computerChoice.toLowerCase() == 'paper') || 
    (humanChoice.toLowerCase() == 'paper') && (computerChoice.toLowerCase() == 'scissors') ||
    (humanChoice.toLowerCase() == 'scissors') && (computerChoice.toLowerCase() == 'rock')) {
        computerScore++;
    }
    else if ((humanChoice.toLowerCase() == 'rock') && (computerChoice.toLowerCase() == 'scissors') || 
    (humanChoice.toLowerCase() == 'paper') && (computerChoice.toLowerCase() == 'rock') ||
    (humanChoice.toLowerCase() == 'scissors') && (computerChoice.toLowerCase() == 'paper')) {
        humanScore++;
    }
    
    if (humanScore > computerScore) {
        return console.log("Human wins with score: " + humanScore);
    } else if (computerScore > humanScore) {
        return console.log("Computer wins with score: " + computerScore);
    } else {
        return console.log("The human and computer ended in a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);