console.log("hello Odin Project");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random_value = Math.random();
    if (random_value < 1/3) return "rock";
    if (random_value < 2/3) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
    // We define an object to map string inputs to numeric values
    const values = {
        rock: 0,
        paper: 1,
        scissors: 2,
    }
    // get the numeric values
    const humanValue = values[humanChoice.toLowerCase()];
    const computerValue = values[computerChoice];

    // Determine the winner
    if ((humanValue - computerValue) % 3 == 1) {
        console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
        humanScore++;
    } else if ((humanValue - computerValue) % 3 == 2) {
        console.log(`You lose this time, ${humanChoice.toLowerCase()} loses against ${computerChoice}`);
        computerScore++;
    } else {
        console.log(`Draw! both get ${computerChoice}`);
    }
}

let test_computer = getComputerChoice()
let test_human = getHumanChoice()
playRound(test_human, test_computer)

