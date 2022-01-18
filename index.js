
var randomNumber1;
var dice1ImgSrc;

var randomNumber2;
var dice2ImgSrc;

var winnerStatus;

document.getElementsByClassName("roll-btn").button.onclick = function() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1ImgSrc = "images/dice" + randomNumber1 + ".png";
  dice2ImgSrc = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").src = dice1ImgSrc;
  document.querySelector(".img2").src = dice2ImgSrc;

  if (randomNumber1 > randomNumber2) {
    winnerStatus = "🚩 Player 1 Wins!"
  } else if (randomNumber2 > randomNumber1) {
    winnerStatus = "Player 2 Wins! 🚩"
  } else {
    winnerStatus = "Draw!"
  }

  document.querySelector("h1").innerHTML = winnerStatus

};
