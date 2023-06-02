"use strict";

const input = document.querySelector(".guess");

let score = 20;
let highScore = 0;

document.querySelector(".again").addEventListener("click", againPlayHandler);

let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(guessNumber);

document.querySelector(".check").addEventListener("click", checkInputHandler);
// document.querySelector(".again").addEventListener("click", againPlay);

function checkInputHandler() {
  const value = Number(input.value);
  console.log("guessNumber", guessNumber);

  if (value < 1 || value > 20) {
    displayMessage("Invalid Value");
  } else {
    if (value === guessNumber) {
      displayMessage("IS Equal ✌");
      document.querySelector(".number").textContent = value;
      document.querySelector("body").style.backgroundColor = "#60b347";
      // highScore = score;
      // document.querySelector(".highscore").textContent = highScore;

      if (score > highScore) {
        highScore = score

        document.querySelector(".highscore").textContent = score;
        // document.querySelector(".highscore").textContent = highScore;
      }
      // if (score > highScore) {
      //   document.querySelector(".highscore").textContent = highScore;
      // }
    } else if (value !== guessNumber) {
      if (score > 1) {
        displayMessage(value > guessNumber ? "too high" : "too Low");

        score--;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".score").textContent = score;
      } else if (score < 1) {
        displayMessage("you lost😈");
      }
    }
  }
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function againPlayHandler() {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;

  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
}
//   if (!value ) {
//     document.querySelector(".message").textContent = " NO NUMBER ⛔";
//     console.log("empty");
//   } else if (value > guessNumber) {
//     document.querySelector(".message").textContent = "Too High";
//     decreaseScore();
//   } else if (value < guessNumber) {
//     document.querySelector(".message").textContent = "Too lOW";
//     decreaseScore();
//   } else if (value === guessNumber) {
//     document.querySelector(".message").textContent = "Equal😎";
//     number.textContent = value;
//   }
// }

// function decreaseScore() {
//           document.querySelector(".message").textContent = totalScore;
//   score.textContent = receivedScore;
//   if (receivedScore < 2) {
//     console.log("manfi");
//     receivedScore = 0;
//   }
// }

// function againPlay() {
//   console.log("again...");
//   input.value = "";
//   score.textContent = "";
// }

// document.querySelector('.again')
