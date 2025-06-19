let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('results');

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "Rock";
    } else if (randomNumber < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return; //Game over
    }
    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||  
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    result += `<br>Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5) {
        result += `<br><strong>Congratulations! You won the game!</strong>`;
    } else if (computerScore === 5) {
        result += `<br><strong>Computer won the game. Better luck next time!</strong>`;
    }

    resultsDiv.innerHTML = result;
}

//Add even listeners to buttons

document.getElementById('rock').addEventListener('click', () => playRound('Rock'));
document.getElementById('paper').addEventListener('click', () => playRound('Paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('Scissors'));