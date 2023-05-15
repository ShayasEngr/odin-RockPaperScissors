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

// Function to Play 1 Round
function playRound(player, computer) {
    //Get Value form GET Func
    if (player == computer) {
        playerScore += 0;
        computerScore += 0;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "It's a TIE \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "ROCK" && computer == "PAPER") {
        playerScore += 0;
        computerScore += 1;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Lost and Computer Wins \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "ROCK" && computer == "SCISSORS") {
        playerScore += 1;
        computerScore += 0;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Wins and Computer Lost \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "PAPER" && computer == "ROCK") {
        playerScore += 1;
        computerScore += 0;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Wins and Computer Lost \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "PAPER" && computer == "SCISSORS") {
        playerScore += 0;
        computerScore += 1;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Lost and Computer Wins \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "SCISSORS" && computer == "ROCK") {
        playerScore += 0;
        computerScore += 1;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Lost and Computer Wins \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    } else if (player == "SCISSORS" && computer == "PAPER") {
        playerScore += 1;
        computerScore += 0;
        return "Player Selected: " + player + " | Computer Selected: " + computer + "\n" + "Player Wins and Computer Lost \n" + "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    }
}
function game() {
    // Loop to Play Game i times
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}
