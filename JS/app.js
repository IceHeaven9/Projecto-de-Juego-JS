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

const ul = document.querySelector(".content");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.textContent = "Primer elemento";
li2.textContent = "Segundo elemento";
ul.appendChild(li1);
ul.appendChild(li2);
