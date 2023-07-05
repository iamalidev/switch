"use strict";

const circle = document.querySelector(".round");
const box = document.querySelector(".box");

circle.addEventListener("click", () => {
  box.classList.toggle("active");
  circle.classList.toggle("active");
});
