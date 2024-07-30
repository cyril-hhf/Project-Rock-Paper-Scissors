const outcome = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;
let round = 0;
const maxScore = 3;

// Get computer's choice
function getComputerChoice() {
    computerChoice  = outcome[Math.floor(Math.random() * outcome.length)]
    return computerChoice
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
      playerScore++;
      return "You win!";
    } else {
      computerScore++;
      return "You lose!";
    }
  }

  function updateScoreboard() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function handleClick(event) {
  round ++;

  const humanChoice = event.target.id.replace("-button", ""); // Get the player's choice based on the button's ID
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  document.getElementById("result-message").textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`;
  updateScoreboard();

  if (playerScore === maxScore | computerScore === maxScore) {
    endGame()
  }
}

function endGame() {
  rock.removeEventListener("click", handleClick);
  paper.removeEventListener("click", handleClick);
  scissors.removeEventListener("click", handleClick);

  let finalMessage = "Game over! ";
  if (playerScore > computerScore) {
    finalMessage += "You won the game!";
  } else if (playerScore < computerScore) {
    finalMessage += "You lost the game!"
  }

  const finalResultElement = document.createElement("p");
  finalResultElement.setAttribute("id", "final-result-message");
  finalResultElement.textContent = finalMessage;
  document.body.appendChild(finalResultElement);
}


const rock = document.getElementById("rock-button")
const paper = document.getElementById("paper-button")
const scissors = document.getElementById("scissors-button")

rock.addEventListener("click", handleClick);
paper.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);


/*
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

// Get player's choice
function getHumanChoice() {
    humanChoice = prompt("Enter rock or paper or scissors.")
    return humanChoice.toLowerCase()
}
*/


// Run game
playGame();
