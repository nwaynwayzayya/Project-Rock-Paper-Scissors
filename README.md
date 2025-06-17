# Rock Paper Scissors

This is a simple **Rock, Paper, Scissors** game built with JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

The user plays against the computer in a 5-round game. Each round, both the user and the computer select Rock, Paper, or Scissors. The outcome is shown after each round, and the overall winner is announced at the end.

---

## 🕹️ How to Play

1. Open the JavaScript file in your browser console or run it in a browser via an HTML file.
2. When prompted, type `"rock"`, `"paper"`, or `"scissors"` (case doesn't matter).
3. The game runs for 5 rounds, showing the winner and updated score each time.
4. After 5 rounds, the final score and winner are displayed.

---

## 🔧 How It Works

- The computer randomly selects Rock, Paper, or Scissors.
- The player inputs their choice via a prompt.
- The game logic compares the two choices and determines a round winner.
- The score is updated accordingly.
- After 5 rounds, the final winner is declared based on scores.

---

## 📚 What I Learned

- Writing and calling functions in JavaScript
- Using `prompt()` and `alert()` for interaction
- Implementing game logic with conditionals
- Looping with `for` to repeat rounds
- Tracking and updating variables for scorekeeping

---

## 💡 Pseudocode

```text
# Pseudo Code

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
