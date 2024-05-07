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
		img.src = "/images/Logo_HAB_PNG.png";
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
