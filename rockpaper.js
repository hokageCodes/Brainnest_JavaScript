const choices = ["rock", "paper", "scissors"];
let winners = [];

// Function to play 5 rounds of the game
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

// Function to play each round (5 times)
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

// Asking Users for input, converting any input to lowercase, and validating input
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
        "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
        while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

// Choosing a random number for the computer between 0 and 3. can never be 3. Highest it can be is 2.999
// Math.random generates ANY number btw 0 and 3, while Math.floor rounds down that number to whole.
// It is between 0 and 3 because the length of the array is 3(Rock, paper, or scissors)
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Validating to see if the User's input matches an item in the array.
function validateInput(choice) {
    return choices.includes(choice);
}

// Checking for winners for each round
function checkWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "Tie";
    } else if (
        (choicePlayer === "rock" && choiceComputer == "scissors") ||
        (choicePlayer === "paper" && choiceComputer == "rock") ||
        (choicePlayer === "scissors" && choiceComputer == "paper")
        ) {
            return "Player";
        } else {
            return "Computer";
        }
    }
    
// Returning for winners for each round
function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

// Result, and winner for each round
function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("-------------------------------");
}

game();
