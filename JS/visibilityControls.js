"use strict";

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
      // Asignar el mismo valor a las imágenes correspondientes
      for (let i = 0; i < cardBackImage.length / 2; i++) {
        cardBackImage[i].value =
          cardBackImage[i + cardBackImage.length / 2].value;
      }
      cardBackImage = cardBackImage.sort(() => Math.random() - 0.5);

      // Seleccionar todas las tarjetas
      const cards = document.querySelectorAll(".card");

      // Recorrer cada tarjeta
      for (let i = 0; i < cards.length; i++) {
        // Crear un nuevo elemento img
        const img = document.createElement("img");

        // Asignar el atributo src con la URL de la imagen correspondiente
        img.src = cardBackImage[i].src;

        // Asignar el atributo data-value con el valor correspondiente
        img.dataset.value = cardBackImage[i].value;

        // Añadir el elemento img a la tarjeta
        cards[i].appendChild(img);
      }

      const backs = document.querySelectorAll("li.back");

      // Asegurarte de que hay la misma cantidad de elementos back y de imágenes
      if (backs.length === cardBackImage.length) {
        // Recorrer cada elemento back
        for (let i = 0; i < backs.length; i++) {
          // Crear un nuevo elemento img
          const img = document.createElement("img");

          // Asignar el atributo src con la URL de la imagen correspondiente
          img.src = cardBackImage[i].src;
          // Asignar el atributo data-value con el valor correspondiente
          img.dataset.value = cardBackImage[i].value;

          // Añadir el elemento img al elemento back
          backs[i].appendChild(img);
        }
      } else {
        console.error(
          "La cantidad de elementos back y de imágenes no coincide"
        );
      }
      let flippedCards = [];

      // Función para girar las tarjetas
      const reveal = (e) => {
        const currentCard = e.currentTarget;
        currentCard.classList.add("flipped");

        // Añadir la tarjeta actual a las tarjetas volteadas
        flippedCards.push(currentCard);

        // Si hay dos tarjetas volteadas
        if (flippedCards.length === 2) {
          // Obtener las imágenes de las tarjetas volteadas
          const img1Value = flippedCards[0].querySelector("img").dataset.value;
          const img2Value = flippedCards[1].querySelector("img").dataset.value;

          // Imprimir los valores data-value para depuración
          console.log(img1Value, img2Value);

          // Comparar los valores de las imágenes
          if (img1Value === img2Value) {
            console.log("¡Encontraste un par!");
            // Los valores coinciden, puedes hacer algo aquí si lo necesitas
          } else {
            // Los valores no coinciden, voltear las tarjetas después de un retraso
            setTimeout(() => {
              flippedCards[0].classList.remove("flipped");
              flippedCards[1].classList.remove("flipped");
            }, 1000); // 1000 milisegundos = 1 segundo
          }
          flippedCards = [];
        }
      };
      // Añadir evento de clic a cada tarjeta
      for (const card of cards) {
        card.addEventListener("click", reveal);
      }
    } else {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
    }
  });
});
