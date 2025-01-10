console.log("hello Odin Project")

function getComputerChoice() {
    const random_value = Math.random();
    if (random_value < 1/3) return "rock";
    if (random_value < 2/3) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}