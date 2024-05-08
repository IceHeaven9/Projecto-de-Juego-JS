"use strict";
//
// Funcionalidad de introducir nombre de usuario y aparecer las tarjetas
//

document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.getElementById("gameContent");
  const headerContent = document.querySelector("header");
  const startGameBtn = document.getElementById("startGame");
  const userInput = document.getElementById("user");
  const divprueba = document.querySelector("div");

  // Inicialmente, oculta solo el contenido principal del juego
  gameContent.classList.add("hidden");
  divprueba.classList.add("hidden");
  startGameBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (userInput.value.trim() !== "") {
      gameContent.classList.remove("hidden"); // Muestra el contenido del juego
      headerContent.classList.add("hidden"); // Oculta el header
      divprueba.classList.remove("hidden");
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});
