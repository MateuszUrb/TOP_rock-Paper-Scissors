function computerPlayer() {
  let handOptions = ["rock", "paper", "scissors"];

  let computerHand =
    handOptions[Math.floor(Math.random() * handOptions.length)];
  return computerHand;
}

function checkWinner(playerHand, computerHand) {
  if (computerHand === playerHand) {
    return "It's a tie!";
  }
  if (computerHand === "rock") {
    if (playerHand === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (computerHand === "paper") {
    if (playerHand === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (computerHand === "scissors") {
    if (playerHand === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; playerScore || computerScore <= 5; i++) {
    let playerHand = prompt("Rock, paper, or scissors?");
    let computerHand = computerPlayer();
    let result = checkWinner(playerHand, computerHand);
    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
    console.log(
      `%c Player: ${playerHand} vs Computer: ${computerHand} | ${result}
      Score: Player: ${playerScore} Computer: ${computerScore}`,
      "color: gold; font-size: 16px;"
    );
    if (playerScore === 5) {
      console.log(`You win the game!`);
      break;
    }
    if (computerScore === 5) {
      console.log(`Computer wins the game!`);
      break;
    }
  }
}
playGame();
