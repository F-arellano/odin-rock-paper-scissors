console.log("hello Odin Project");

function getComputerChoice() {
    const random_value = Math.random();
    if (random_value < 1./3.) return "rock";
    if (random_value < 2./3.) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
        const criteria = (humanValue - computerValue + 3) % 3
        if (criteria == 1) {
            console.log(`You win! ${humanChoice.toLowerCase()} beats ${computerChoice}`);
            humanScore++;
        } else if (criteria == 2) {
            console.log(`You lose this time, ${humanChoice.toLowerCase()} loses against ${computerChoice}`);
            computerScore++;
        } else {
            console.log(`Draw! you get ${humanChoice} and the PC get ${computerChoice}. val: ${criteria % 3}`);
        }
    }
    
    for (let i=0; i<5; i++) {
        let newComputer = getComputerChoice()
        let newHuman = getHumanChoice()
        playRound(newHuman, newComputer)
        console.log(`The score is: You ${humanScore} - ${computerScore} computer`)
    }
}

playGame()