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
    let color = cardColor(suit);
    document.querySelector(".random-card").style.color = color;
    document.querySelector(
      ".suit1"
    ).innerHTML = `<div><div class="d-block mx-auto align-text-center ps-1">${num}</div><div class="d-block text-center">${suit}</div></div>`;
    document.querySelector(
      ".suit2"
    ).innerHTML = `<div><div class="d-block mx-auto align-text-center ps-1">${num}</div><div class="d-block text-center">${suit}</div></div>`;
    if (num >= 4 && num <= 9) {
      if (num % 2 === 0) {
        for (let i = 0; i < num / 2; i++) {
          document.querySelector(
            ".num1"
          ).innerHTML += `<div class="d-block   p-0 text-center">${suit}</div>`;
          document.querySelector(
            ".num3"
          ).innerHTML += `<div class="d-block  p-0 text-center">${suit}</div>`;
        }
      } else {
        for (let j = 0; j < Math.floor(num / 2); j++) {
          document.querySelector(
            ".num1"
          ).innerHTML += `<div class="d-block  p-0 text-center" >${suit}</div>`;
          document.querySelector(
            ".num3"
          ).innerHTML += `<div class="d-block  p-0 text-center" >${suit}</div>`;
        }
        document.querySelector(
          ".num2"
        ).innerHTML += `<div class="d-block   my-auto p-0 text-center" >${suit}</div>`;
      }
    } else if (num >= 2 && num <= 3) {
      for (let i = 0; i < num; i++) {
        document.querySelector(
          ".num2"
        ).innerHTML += `<div class="d-block my-auto p-0 text-center" >${suit}</div>`;
      }
    } else if (num === 10) {
      for (let j = 0; j < Math.floor(num - 1 / 2); j++) {
        document.querySelector(
          ".num1"
        ).innerHTML += `<div class="d-block my-auto p-0 text-center" >${suit}</div>`;
        document.querySelector(
          ".num3"
        ).innerHTML += `<div class="d-block my-auto p-0 text-center" >${suit}</div>`;
      }
      document.querySelector(
        ".num2"
      ).innerHTML += `<div class="d-block my-auto p-0 text-center" >${suit}</div><div class="d-block my-auto p-0 text-center" >${suit}</div>`;
    } else {
      document.querySelector(
        ".num2"
      ).innerHTML = `<div class="d-block my-auto p-0 text-center" >${suit}</div>`;
    }
  }

  randomCard();
};
