"use strict";

// import { cards, revealCard } from "./functions.js";
const addCards = (cards) => {
	const fragment = document.createDocumentFragment();
	for (const card of cards) {
		const ul = document.getElementsByClassName("content");
		const li1 = (document.createElement("li").className = "front");
		const li2 = (document.createElement("li").className = "back");
		ul.appendChild(li1);
		ul.appendChild(li2);
	}
};
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

// revealCard(cards);

// ul.innerHTML = `<li class="front">
// <img src="/images/Logo_HAB_PNG.png"</li>
// 	<li class="back"></li>`;
// fragment.append(ul);
// article.append(fragment);
// 	}
// };

// ul.querySelectorAll("li").forEach((li) => {
// 	newUl.appendChild(li.cloneNode(true));
// });
