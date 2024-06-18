outcome = ["rock", "paper", "scissors"]

function getComputerChoice() {
    computerChoice  = outcome[Math.floor(Math.random() * outcome.length)]
    return computerChoice
}

function getHumanChoice() {
    humanChoice = prompt("Enter rock or paper or scissors.")
    return humanChoice.toLowerCase()
}

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            alert("It's a draw!")
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            alert("It's a draw!")
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            alert("It's a draw!")
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            alert("You lose this round!")
            computerScore = computerScore + 1
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            alert("You lose this round!")
            computerScore = computerScore + 1
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            alert("You lose this round!")
            computerScore = computerScore + 1
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            alert("You win!")
            humanScore = humanScore + 1
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("You win!")
            humanScore = humanScore + 1
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("You win!")
            humanScore = humanScore + 1
        }
    }

playRound(humanSelection, computerSelection)
console.log(humanScore)
console.log(computerScore)
