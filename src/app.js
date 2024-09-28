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

  function randomCard() {
    let suit = randomSuit();
    let num = randomNum();
    if (num >= 2 && num <= 4) {
      document.querySelector(".suit1").innerHTML = `<span>${num}</span>`;
      document.querySelector(".suit2").innerHTML = `<span>${num}</span>`;
      for (let i = 0; i < num; i++) {
        document.querySelector(
          ".num1"
        ).innerHTML += `<div class="d-inline m-0 p-0">${suit}</div>`;
      }
    } else if (num >= 5 && num <= 10) {
      document.querySelector(".suit1").innerHTML = `<span>${num}</span>`;
      document.querySelector(".suit2").innerHTML = `<span>${num}</span>`;
      for (let j = 0; j < Math.round(num / 2); j++) {
        document.querySelector(
          ".num1"
        ).innerHTML += `<div class="d-inline m-0 p-0">${suit}</div>`;
      }
      for (let k = Math.round(num / 2); k < num; k++) {
        document.querySelector(
          ".num2"
        ).innerHTML += `<div class="d-inline m-0 p-0">${suit}</div>`;
      }
    } else {
      document.querySelector(".suit1").innerHTML = `<span>${suit}</span>`;
      document.querySelector(
        ".num1"
      ).innerHTML = `<div class="mx-auto">${num}</div>`;
      document.querySelector(".suit2").innerHTML = `<span>${suit}</span>`;
    }
    document.querySelector(".random-card").style.color = cardColor(suit);
  }

  randomCard();
};
