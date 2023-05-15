console.log("ROCK | PAPER | SCISSORS");

// Declare variable for PlayerSelection and ComputerSelection 
let playerSelection = "";
let computerSelection = "";

// Variable Declaration to track Scores
let playerScore = 0;
let computerScore = 0;

// Function to Get Computer Choice 
function getComputerChoice() {
    let selections = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomNum = Math.floor(Math.random() * 3);
    return selections[randomNum];
}

// Function to Get Player Selection (return getPlayerSelection Avoid undefined return)
function getPlayerChoice() {
    let playerChoice = prompt("ROCK / PAPER / SCISSORS").toUpperCase();
    if (playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS") {
        return playerChoice;
    } else {
        alert("Choose from (ROCK / PAPER / SCISSORS)");
        return getPlayerChoice();
    }
}