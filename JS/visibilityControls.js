"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const gameContent = document.getElementById("gameContent");
  const headerContent = document.querySelector("header");
  const startGameBtn = document.getElementById("startGame");
  const userInput = document.getElementById("user");
  const container = document.querySelector(".container");
  const divUserContent = document.getElementById("divUser");
  const divContadorContent = document.getElementById("divContador");
  const divTextContadorContent = document.getElementById("divTextContador");

  gameContent.classList.add("hidden");
  divUserContent.classList.add("hidden");
  divContadorContent.classList.add("hidden");
  divTextContadorContent.classList.add("hidden");

  startGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (userInput.value.trim() !== "") {
      headerContent.classList.add("hidden");
      gameContent.classList.remove("hidden");
      divUserContent.classList.remove("hidden");
      divContadorContent.classList.remove("hidden");
      divTextContadorContent.classList.remove("hidden");

      let cardBackImage = [
        { src: "/images/1.png", value: 1 },
        { src: "/images/2.png", value: 2 },
        { src: "/images/3.png", value: 3 },
        { src: "/images/4.png", value: 4 },
        { src: "/images/5.png", value: 5 },
        { src: "/images/6.png", value: 6 },
        { src: "/images/7.png", value: 7 },
        { src: "/images/8.png", value: 8 },
        { src: "/images/1c.png", value: 1 },
        { src: "/images/2c.png", value: 2 },
        { src: "/images/3c.png", value: 3 },
        { src: "/images/4c.png", value: 4 },
        { src: "/images/5c.png", value: 5 },
        { src: "/images/6c.png", value: 6 },
        { src: "/images/7c.png", value: 7 },
        { src: "/images/8c.png", value: 8 },
      ];

      // Mezclar las tarjetas
      cardBackImage = cardBackImage.sort(() => Math.random() - 0.5);

      // Limpiar el contenedor de tarjetas antes de agregar nuevas tarjetas
      container.innerHTML = "";

      // Crear las tarjetas
      for (let i = 0; i < cardBackImage.length; i++) {
        const card = document.createElement("article");
        const content = document.createElement("ul");
        const front = document.createElement("li");
        const back = document.createElement("li");
        const img = document.createElement("img");

        card.classList.add("card");
        content.classList.add("content");
        front.classList.add("front");
        back.classList.add("back");

        // Asignar valor a la tarjeta trasera
        img.src = cardBackImage[i].src;
        img.dataset.value = cardBackImage[i].value;
        back.dataset.value = cardBackImage[i].value;
        back.appendChild(img);

        // Asignar imagen al frente
        const frontImg = document.createElement("img");
        frontImg.src = "/images/Logo_HAB_PNG.png";
        frontImg.alt = "logo hack a boss";
        front.appendChild(frontImg);

        content.appendChild(front);
        content.appendChild(back);
        card.appendChild(content);
        container.appendChild(card);

        card.addEventListener("click", reveal);
      }

      let flippedCards = [];

      // Función para girar las tarjetas
      function reveal(e) {
        const currentCard = e.currentTarget;
        if (
          flippedCards.length < 2 &&
          !currentCard.classList.contains("flipped")
        ) {
          currentCard.classList.add("flipped");
          flippedCards.push(currentCard);
        }

        // Si hay dos tarjetas volteadas
        if (flippedCards.length === 2) {
          const img1Value =
            flippedCards[0].querySelector(".back img").dataset.value;
          const img2Value =
            flippedCards[1].querySelector(".back img").dataset.value;

          console.log(img1Value, img2Value);

          if (img1Value === img2Value) {
            flippedCards = [];
            incrementarIntentos();
          } else {
            setTimeout(() => {
              flippedCards[0].classList.remove("flipped");
              flippedCards[1].classList.remove("flipped");
              flippedCards = [];
              incrementarIntentos();
            }, 500);
          }
        }
      }
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});

// Crear una funcion que incremente el contador de intentos y que sume uno cada vez que se haga click en dos tarjetas
let intentos = 0;
function incrementarIntentos() {
  intentos++;
  divIntentos.textContent = `Intentos: ${intentos}`;
}
