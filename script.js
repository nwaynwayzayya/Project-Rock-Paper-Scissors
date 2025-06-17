function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber<0.34) {
        return "Rock";
    }
    else if (randomNumber<0.67) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose one from 'Rock', 'Paper', 'Scissors: '").toLowerCase();
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}


function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;

    if (human == computer) {
        return "It's a tie!";
    }
    else if (human == "Rock" && computer == "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    }
    else if (human == "Rock" && computer == "Scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
    }
    else if (human == "Paper" && computer == "Rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    }
    else if (human == "Paper" && computer == "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    }
    else if (human == "Scissors" && computer == "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    }
    else if (human == "Scissors" && computer == "Paper") {
        humanScore++;
        return "You win! Scissors beat Paper.";
    }
}

function playGame() {

    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
        alert(`Score:\n\tYou: ${humanScore}\n\tComputer: ${computerScore}`);
    }
    alert(`Final Score:\n\tYou: ${humanScore}\n\tComputer: ${computerScore}`);
    if (humanScore > computerScore) {
        alert("Congratulations! You won!");
    }
    else if (computerScore > humanScore) {
        alert("I'm sorry. Computer won this time.");
    }
    else {
        alert("It's a tie.")
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();



