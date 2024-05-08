"use strict";
//
// Funcionalidad de introducir nombre de usuario y aparecer las tarjetas
//

document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.getElementById("gameContent");
  const headerContent = document.querySelector("header");
  const startGameBtn = document.getElementById("startGame");
  const userInput = document.getElementById("user");
  const divUserContent = document.getElementById("divUser");
  const divContadorContent = document.getElementById("divContador");
  const divTextContadorContent = document.getElementById("divTextContador");
  const footerContent = document.querySelector("footer");

  // Inicialmente, oculta solo el contenido principal del juego
  divUserContent.classList.add("hidden");
  gameContent.classList.add("hidden");
  divContadorContent.classList.add("hidden");
  divTextContadorContent.classList.add("hidden");
  footerContent.classList.add("hidden");

  startGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (userInput.value.trim() !== "") {
      divUserContent.classList.remove("hidden");
      gameContent.classList.remove("hidden");
      headerContent.classList.add("hidden");
      divContadorContent.classList.remove("hidden");
      divTextContadorContent.classList.remove("hidden");
      footerContent.classList.remove("hidden");
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});
