/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomSuit() {
    let suits = ["♠", "♥", "♣", "♦"];
    return suits[Math.floor(Math.random() * suits.length)];
  }

  function randomNum() {
    let nums = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    return nums[Math.floor(Math.random() * nums.length)];
  }
  function cardColor(suit) {
    return suit === "♥" || suit === "♦" ? "red" : "black";
  }

  let displaySuit = randomSuit();

  document.querySelector(".random-card").style.color = cardColor(displaySuit);
  document.querySelector(".suit1").innerHTML = displaySuit;
  document.querySelector(".num").innerHTML = randomNum();
  document.querySelector(".suit2").innerHTML = displaySuit;
};
