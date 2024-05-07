"use strict";

// const cards = document.querySelectorAll(".card");
// const revealCard = document.addEventListener("DOMContentLoaded", () => {
// 	const reveal = (event) => {
// 		const currentCard = event.currentTarget;
// 		currentCard.classList.add("flipped");

// 		// setTimeout(() => {
// 		//   currentCard.classList.remove("flipped");
// 		// }, 1000);
// 	};

// 	for (const card of cards) {
// 		card.addEventListener("click", reveal);
// 	}
// });

// export { revealCard, cards };

// const form = document.querySelector("form");
// const userField = document.getElementById("user");
// const header = document.querySelector("header");
// const cards = document.querySelectorAll(".card");

// if (form && userField && header && cards) {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const { value: userName } = userField;
//     if (userName.trim() === "") return alert("Por favor, introduce tu nombre.");

//     header.classList.remove("centered");
//     header.classList.add("moved-up");

//     cards.forEach((card) =>
//       Object.assign(card.style, { visibility: "visible", opacity: 1 })
//     );
//   });

//   const reveal = (e) => {
//     const currentCard = e.currentTarget;
//     currentCard.classList.add("flipped");

//     setTimeout(() => {
//       currentCard.classList.remove("flipped");
//     }, 1000);
//   };

//   for (const card of cards) {
//     card.addEventListener("click", reveal);
//   }
// }
