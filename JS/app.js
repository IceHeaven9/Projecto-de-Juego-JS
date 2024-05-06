"use strict";

import { reveal, cards } from "./functions.js";

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

reveal(cards);
