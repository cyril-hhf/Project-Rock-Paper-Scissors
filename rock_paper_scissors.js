outcome = ["rock", "paper", "scissors"]

// Get computer's choice
function getComputerChoice() {
    computerChoice  = outcome[Math.floor(Math.random() * outcome.length)]
    return computerChoice
}

// Get player's choice
function getHumanChoice() {
    humanChoice = prompt("Enter rock or paper or scissors.")
    return humanChoice.toLowerCase()
}



// Play single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a draw!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

// Play 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
    
        console.log(`Round ${i + 1}: You chose ${humanChoice}, the computer chose ${computerChoice}. ${result}`);
        if (result === "You win!") {
            humanScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log(`You win the game! Your score: ${humanScore}, Computer's score: ${computerScore}.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose the game.. Your score: ${humanScore}, Computer's score: ${computerScore}.`)
    } else {
        console.log(`It's a draw! Your score: ${humanScore}, Computer's score: ${computerScore}.`)
    } 
}



// Run game
playGame();
