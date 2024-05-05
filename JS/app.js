"use strict";
document.getElementById("startGame").addEventListener("click", function () {
  const userName = document.getElementById("user").value;
  if (userName.trim() !== "") {
    document.querySelector("header").classList.remove("centered");
    document.querySelector("header").classList.add("moved-up");
    document.querySelectorAll(".card").forEach((card) => {
      card.style.visibility = "visible";
      card.style.opacity = 1;
    });
  } else {
    alert("Por favor, introduce tu nombre.");
  }
});

const cards = document.querySelectorAll(".card");

const reveal = (e) => {
  const currentCard = e.currentTarget;
  currentCard.classList.add("flipped");

  setTimeout(() => {
    currentCard.classList.remove("flipped");
  }, 1000);
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}
