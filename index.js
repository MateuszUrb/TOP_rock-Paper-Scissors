let result = document.querySelector(".result");
const btn__rock = document.querySelector("[data-hand='r']");
const btn__paper = document.querySelector("[data-hand='p']");
const btn__scissors = document.querySelector("[data-hand='s']");
let computerScoreDisplay = document.querySelector(".scores__computer");
let playerScoreDisplay = document.querySelector(".scores__player");
let userSelection = document.querySelector(".selected__player");
let computerSelection = document.querySelector(".selected__computer");

function computerPlayer() {
  let handOptions = ["r", "p", "s"];

  let computerHand =
    handOptions[Math.floor(Math.random() * handOptions.length)];
  return computerHand;
}

const convertToWord = (letter) => {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
};

function userWin(user, computer) {
  result.innerHTML = `You win! ${convertToWord(user)} beats ${convertToWord(
    computer
  )}`;
  playerScoreDisplay.innerText++;
}

function computerWin(user, computer) {
  result.innerHTML = `You lose! ${convertToWord(
    computer
  )} beats ${convertToWord(user)}`;
  computerScoreDisplay.innerText++;
}

function tie(user, computer) {
  result.innerHTML = `It's a tie! ${convertToWord(user)} equals ${convertToWord(
    computer
  )}`;
}

function displayHand(user, computer) {
  userSelection.innerText = convertToWord(user);
  computerSelection.innerText = convertToWord(computer);
}

function game(userChoice) {
  let computerHand = computerPlayer();
  switch (userChoice + computerHand) {
    case "rs":
    case "pr":
    case "sp":
      userWin(userChoice, computerHand);
      displayHand(userChoice, computerHand);
      break;
    case "rp":
    case "ps":
    case "sr":
      computerWin(computerHand, userChoice);
      displayHand(userChoice, computerHand);

      break;
    case "rr":
    case "pp":
    case "ss":
      tie();
      displayHand(userChoice, computerHand);

      break;
  }
}

const checkPoints = () => {
  if (playerScoreDisplay.innerText === "5") {
    result.innerHTML = "You win!";
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
  } else if (computerScoreDisplay.innerText === "5") {
    result.innerHTML = "You lose!";
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
  }
};

function playRound() {
  btn__rock.addEventListener("click", () => {
    game("r");
    checkPoints();
  });
  btn__paper.addEventListener("click", () => {
    game("p");
    checkPoints();
  });
  btn__scissors.addEventListener("click", () => {
    game("s");
    checkPoints();
  });
}

playRound();
