let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice <= 0.33333333333333333) {
    let choice = "Rock";
    return choice;
  }
  else if ((computerChoice > 0.33333333333333333) && (computerChoice < 0.66666666666666666)) {
    let choice = "Paper";
    return choice;
  }
  else {
    let choice = "Scissors";
    return choice;
  }
}

function getHumanChoice() {
  // Not debugging cuz prompt only works in browser
  let humanChoice = prompt("Enter your choice: ");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Same choice!";
  }
  else if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      computerScore += 1;
      return "You lose! Paper beat Rock!";
    }
    else {
      humanScore += 1;
      return "You win! Rock beat Scissors!";
    }
  }

  else if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      computerScore += 1;
      return "You lose! Scissors beat Paper!";
    }
    else {
      humanScore += 1;
      return "You win! Paper beat Rock!";
    }
  }

  else if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      computerScore += 1;
      return "You lose! Rock beat Scissors!";
    }
    else {
      humanScore += 1;
      return "You win! Scissors beat Paper!";
    }
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Scores: \nComputer: ${computerScore} \nYou: ${humanScore}`);
  }
}

playGame();

