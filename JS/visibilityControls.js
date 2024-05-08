"use strict";
//
// Funcionalidad de introducir nombre de usuario y aparecer las tarjetas
//

document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.getElementById("gameContent");
  const headerContent = document.querySelector("header");
  const startGameBtn = document.getElementById("startGame");
  const userInput = document.getElementById("user");
  const h3Contador = document.getElementsByClassName("contador");
  const divUserContent = document.getElementById("divUser");

  // Inicialmente, oculta solo el contenido principal del juego
  divUserContent.classList.add("hidden");
  gameContent.classList.add("hidden");
  h3Contador.classList.add("hidden");

  startGameBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (userInput.value.trim() !== "") {
      divUserContent.classList.remove("hidden"); // Muestra el contenido del usuario
      h3Contador.classList.remove("hidden"); // Muestra el contador
      gameContent.classList.remove("hidden"); // Muestra el contenido del juego
      headerContent.classList.add("hidden"); // Oculta el header
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});
