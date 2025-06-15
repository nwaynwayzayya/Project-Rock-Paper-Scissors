# Project-Rock-Paper-Scissors

#Pesudo Code
START

function getComputerChoice
    randomly pick "Rock", "Paper", or "Scissors"
    return the choice

function getHumanChoice
    prompt the user to enter "Rock", "Paper", or "Scissors"
    make input lowercase or match format
    return the choice

function playRound(humanChoice, computerChoice)
    IF humanChoice equals computerChoice
        DISPLAY "It's a tie!"
        RETURN "tie"
    ELSE IF humanChoice beats computerChoice
        DISPLAY "You win! [computerChoice] beats [humanChoice]"
        RETURN "human"
    ELSE
        DISPLAY "You lose! [computerChoice] beats [humanChoice]"
        RETURN "computer"

function playGame
    set humanScore to 0
    set computerScore to 0

    REPEAT 5 times
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        result = playRound(humanChoice, computerChoice)

        IF result is "human"
            increment humanScore
        ELSE IF result is "computer"
            increment computerScore
        ELSE 
            do nothing (tie)

DISPLAY "Final Score: Human [humanScore] - Computer [computerScore]"

    IF humanScore > computerScore
        DISPLAY "You win the game!"
    ELSE IF computerScore > humanScore
        DISPLAY "Computer wins the game!"
    ELSE 
        DISPLAY "The game is a tie!"

CALL playGame 

END