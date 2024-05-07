"use strict";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const { value: userName } = document.getElementById("user");
  if (userName.trim() === "") return alert("Por favor, introduce tu nombre.");

  const header = document.querySelector("header");
  header.classList.remove("centered");
  header.classList.add("moved-up");

  document
    .querySelectorAll(".card")
    .forEach((card) =>
      Object.assign(card.style, { visibility: "visible", opacity: 1 })
    );
});

window.onload = function () {
  // Obtén el contenedor donde quieres agregar las tarjetas
  const container = document.querySelector(".container");

  // Define la cantidad de tarjetas que quieres crear
  const numberOfCards = 16;

  // Crea las tarjetas
  for (let i = 0; i < numberOfCards; i++) {
    // Crea los elementos necesarios
    const card = document.createElement("article");
    const content = document.createElement("ul");
    const front = document.createElement("li");
    const back = document.createElement("li");
    const img = document.createElement("img");

    // Añade las clases necesarias
    card.classList.add("card");
    content.classList.add("content");
    front.classList.add("front");
    back.classList.add("back");

    // Añade el atributo src a la imagen
    img.src = "/img/Logo HAB PNG.png";
    img.alt = "logo hack a boss";

    // Añade la imagen al frente de la tarjeta
    front.appendChild(img);

    // Añade el frente y el dorso al contenido de la tarjeta
    content.appendChild(front);
    content.appendChild(back);

    // Añade el contenido a la tarjeta
    card.appendChild(content);

    // Añade la tarjeta al contenedor
    container.appendChild(card);
  }
};

//
// Funcionalidad de introducir nombre de usuario y aparecer las tarjetas
//

document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.getElementById("gameContent");
  const headerContent = document.querySelector("header");
  const startGameBtn = document.getElementById("startGame");
  const userInput = document.getElementById("user");

  // Inicialmente, oculta solo el contenido principal del juego
  gameContent.classList.add("hidden");

  startGameBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (userInput.value.trim() !== "") {
      gameContent.classList.remove("hidden"); // Muestra el contenido del juego
      headerContent.classList.add("hidden"); // Oculta el header
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});
