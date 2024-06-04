outcome = ["rock", "paper", "scissors"]

function getComputerChoice() {
    computerChoice  = outcome[Math.floor(Math.random() * outcome.length)]
    console.log(computerChoice)
}

getComputerChoice()

function getHumanChoice(input) {
    humanChoice = prompt("Enter rock or paper or scissors.")
    console.log(humanChoice)
}

getHumanChoice()

humanScore = 0;
computerScore = 0;
