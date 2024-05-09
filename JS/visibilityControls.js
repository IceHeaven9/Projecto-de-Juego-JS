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
				"/images/1.png",
				"/images/2.png",
				"/images/3.png",
				"/images/4.png",
				"/images/5.png",
				"/images/6.png",
				"/images/7.png",
				"/images/8.png",
			];
			cardBackImage = cardBackImage.concat(cardBackImage);
			cardBackImage = cardBackImage.sort(() => Math.random() - 0.5);

			// Seleccionar todas las tarjetas
			const cards = document.querySelectorAll(".card");

			const backs = document.querySelectorAll("li.back");

			// Asegurarte de que hay la misma cantidad de elementos back y de imágenes
			if (backs.length === cardBackImage.length) {
				// Recorrer cada elemento back
				for (let i = 0; i < backs.length; i++) {
					// Crear un nuevo elemento img
					const img = document.createElement("img");

					// Asignar el atributo src con la URL de la imagen correspondiente
					img.src = cardBackImage[i];

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
					const img1 = flippedCards[0].querySelector("img").src;
					const img2 = flippedCards[1].querySelector("img").src;

					// Si las imágenes son iguales
					if (img1.url === img2.url) {
						console.log("¡Has encontrado una pareja!");
					} else {
						// Si las imágenes no son iguales, voltear las tarjetas de nuevo después de 1 segundo
						setTimeout(() => {
							flippedCards[0].classList.remove("flipped");
							flippedCards[1].classList.remove("flipped");
							flippedCards = [];
						}, 1000);
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
