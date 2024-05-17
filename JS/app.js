"use strict";

const mainElements = document.querySelector("main");

//Creamos un div dentro del body llamado divUser
const divUser = document.createElement("div");
divUser.id = "divUser";
mainElements.appendChild(divUser);

//Texto que pone el valor del input a user
const user = document.getElementById("user");
function handleInputChange() {
	// Recupera el valor del input
	const userName = user.value;

	// Guarda el valor en localStorage
	localStorage.setItem("user", userName);
}

// Añade el controlador de eventos al input
user.addEventListener("change", handleInputChange);
const h2 = document.createElement("h2");
h2.textContent = user.value;
divUser.appendChild(h2);

// Creamos un div para el contador
const divContador = document.createElement("div");
mainElements.appendChild(divContador);
divContador.id = "divContador";

// Creamos un h3 para el contador
const h3Contador = document.createElement("h3");
h3Contador.classList.add("contador");
h3Contador.textContent = "";
divContador.appendChild(h3Contador);

// Un div para el texto del contador
const divTextContador = document.createElement("div");
divTextContador.id = "divTextContador";
mainElements.appendChild(divTextContador);

// Creamos un div para el contador de intentos
const divIntentos = document.createElement("div");
divIntentos.id = "divIntentos";
divIntentos.textContent = "Intentos: 0";
mainElements.appendChild(divIntentos);

// Creamos un div para el contador de intentos fallidos
const divContadorDeFallos = document.createElement("div");
divContadorDeFallos.id = "divFallos";
divContadorDeFallos.textContent = "Fallos: 0";
mainElements.appendChild(divContadorDeFallos);

// Creamos un div para mostrar mostrar el body con todo oculto y solo el nuevo div con un mensaje de gracias por jugar y un resultado de su partida
const divResultado = document.createElement("div");
divResultado.id = "divResultadoJuego";
mainElements.appendChild(divResultado);

// Creamos un h2 para el mensaje de gracias por jugar
const h2Resultado = document.createElement("h2");
h2Resultado.id = "gracias";
h2Resultado.textContent = "Gracias por jugar!";
divResultado.appendChild(h2Resultado);

// Creamos un h3 para el resultado de la partida
const h3Resultado = document.createElement("h3");
h3Resultado.id = "h3Resultado";
divResultado.appendChild(h3Resultado);

// Creamos un h3 para la nota final del juego
const h3NotaFinal = document.createElement("h3");
h3NotaFinal.id = "h3NotaFinal";
divResultado.appendChild(h3NotaFinal);

// Creamos un div para el ranking
const divRanking = document.createElement("div");
divRanking.id = "divRanking";
document.body.appendChild(divRanking);

const recuperarValoresYActualizarRanking = () => {
	// Recupera los valores del localStorage
	const user = localStorage.getItem("user");
	const nota = parseFloat(localStorage.getItem("nota"));

	// Recupera el array del localStorage o crea uno nuevo si no existe
	let arrayUsuarioNota =
		JSON.parse(localStorage.getItem("arrayUsuarioNota")) || [];

	// Busca si el usuario ya existe en el array
	const usuarioExistente = arrayUsuarioNota.find(
		(elemento) => elemento.user === user
	);

	if (usuarioExistente) {
		// Si el usuario existe y la nueva nota es mayor que la existente, actualiza la nota
		if (nota > usuarioExistente.nota) {
			usuarioExistente.nota = nota;
		}
	} else {
		// Si el usuario no existe, añade el nuevo usuario y nota al array
		// Si el array ya tiene 5 elementos, elimina el primer elemento
		if (arrayUsuarioNota.length === 5) {
			arrayUsuarioNota.shift();
		}
		arrayUsuarioNota.push({ user, nota });
	}

	// Guarda el array en el localStorage
	localStorage.setItem("arrayUsuarioNota", JSON.stringify(arrayUsuarioNota));

	// Recorre el array y añade un nuevo elemento "p" con el valor de "user" y "nota" de cada objeto del array al "divRanking"
	arrayUsuarioNota.forEach((elemento) => {
		const p = document.createElement("p");
		p.textContent = `${elemento.user}: ${elemento.nota}`;
		divRanking.appendChild(p);
	});
};

// Llama a la función para recuperar los valores y actualizar el ranking
recuperarValoresYActualizarRanking();

// Creamos un botón para desbloquear el ranking
const btnUnlockRanking = document.createElement("button");
btnUnlockRanking.id = "btnUnlockRanking";
btnUnlockRanking.textContent = "⬇️ Ranking ⬇️";
divRanking.appendChild(btnUnlockRanking);

// Creamos un h3 para el ranking
const rankingH3 = document.createElement("h3");
rankingH3.id = "rankingH3";
rankingH3.textContent = "Mejor Puntuación:";
divRanking.appendChild(rankingH3);

// Creamos un botón para reiniciar el juego
const btnGameAgain = document.createElement("button");
btnGameAgain.id = "btnGameAgain";
btnGameAgain.textContent = "Volver a jugar";
divResultado.appendChild(btnGameAgain);

// Creamos un botón para salir del juego
const btnExitGame = document.createElement("button");
btnExitGame.id = "btnExitGame";
btnExitGame.textContent = "Salir del juego";
divResultado.appendChild(btnExitGame);

//Funcion para que H2 se muestre el valor del input user y siempre con la primera letra en mayúscula
user.addEventListener("input", function () {
	const maxLength = 15;
	const userValue = user.value;
	if (userValue.length > maxLength) {
		user.value = userValue.slice(0, maxLength);
	}

	h2.textContent =
		"Suerte, " +
		user.value
			.split(" ")
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ") +
		"!";
});

// Funcion para activar contador y ocultarlo al finalizar

let contador;
let intervalId;

function startTimer() {
	contador = 10;
	let tiempoInicio = Date.now();
	let tiempoFinal = tiempoInicio + contador * 1000;
	intervalId = setInterval(() => {
		let tiempoRestante = tiempoFinal - Date.now();
		contador = Math.round(tiempoRestante / 1000);
		divTextContador.textContent = `Tiempo restante: ${contador} seg`;
		contador--;

		const tarjetas = document.querySelectorAll(".card");
		tarjetas.forEach((card) => {
			card.classList.add("flipped");
		});

		const matchedCards = document.querySelectorAll(".back.matched");
		matchedCards.forEach((card) => {
			card.classList.remove("matched");
		});

		if (contador < 0) {
			clearInterval(intervalId);
			h3Contador.textContent = "";
			divTextContador.textContent = "";
			divTextContador.textContent = "Comienza el juego!!";

			const flippedCards = document.querySelectorAll(".card.flipped");

			for (const card of flippedCards) {
				card.classList.remove("flipped");
			}
		}
	}, 100);
}

startGame.addEventListener("click", startTimer);

function resetGame() {
	// Detener el temporizador actual
	clearInterval(intervalId);

	// Reiniciar el temporizador
	startTimer();
}
const resetBtnController = document.getElementById("resetBtn");
// Añadir el controlador de eventos al botón de reset
resetBtnController.addEventListener("click", resetGame);
const btnGameAgainContent = document.getElementById("btnGameAgain");
btnGameAgainContent.addEventListener("click", resetGame);

// Funcion para crear las tarjetas
window.onload = function () {
	// Restablecer el valor del input "user" a null
	const user = document.getElementById("user");
	user.value = null;
	// Obtiene el contenedor donde queremos agregar las tarjetas
	const container = document.querySelector(".container");

	// Cantidad de tarjetas que quieres crear
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
		img.src = "../images/Logotipo-HACK-A-BOSS_white.png";
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

//  IceHeaven, Ivan Sanchez, Marc Ollé, Santiago Cadavid..
//         ─────▄██▀▀▀▀▀▀▀▀▀▀▀▀▀██▄─────
//         ────███───────────────███────
//         ───███─────────────────███───
//         ──███───▄▀▀▄─────▄▀▀▄───███──
//         ─████─▄▀────▀▄─▄▀────▀▄─████─
//         ─████──▄████─────████▄──█████
//         █████─██▓▓▓██───██▓▓▓██─█████
//         █████─██▓█▓██───██▓█▓██─█████
//         █████─██▓▓▓█▀─▄─▀█▓▓▓██─█████
//         ████▀──▀▀▀▀▀─▄█▄─▀▀▀▀▀──▀████
//         ███─▄▀▀▀▄────███────▄▀▀▀▄─███
//         ███──▄▀▄─█──█████──█─▄▀▄──███
//         ███─█──█─█──█████──█─█──█─███
//         ███─█─▀──█─▄█████▄─█──▀─█─███
//         ███▄─▀▀▀▀──█─▀█▀─█──▀▀▀▀─▄███
//         ████─────────────────────████
//         ─███───▀█████████████▀───████
//         ─███───────█─────█───────████
//         ─████─────█───────█─────█████
//         ───███▄──█────█────█──▄█████─
//         ─────▀█████▄▄███▄▄█████▀─────
//         ──────────█▄─────▄█──────────
//         ──────────▄█─────█▄──────────
//         ───────▄████─────████▄───────
//         ─────▄███████───███████▄─────
//         ───▄█████████████████████▄───
//         ─▄███▀───███████████───▀███▄─
//         ███▀─────███████████─────▀███
//         ▌▌▌▌▒▒───███████████───▒▒▐▐▐▐
//         ─────▒▒──███████████──▒▒─────
//         ──────▒▒─███████████─▒▒──────
//         ───────▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒───────
//         ─────────████░░█████─────────
//         ────────█████░░██████────────
//         ──────███████░░███████───────
//         ─────█████──█░░█──█████──────
//         ─────█████──████──█████──────
//         ──────████──████──████───────
//         ──────████──████──████───────
//         ──────████───██───████───────
//         ──────████───██───████───────
//         ──────████──████──████───────
//         ─██────██───████───██─────██─
//         ─██───████──████──████────██─
//         ─███████████████████████████─
//         ─██─────────████──────────██─
//         ─██─────────████──────────██─
//         ────────────████─────────────
//         ─────────────██──────────────

// ██████╗  ██████╗     ██╗   ██╗ ██████╗ ██╗   ██╗
// ██╔══██╗██╔═══██╗    ╚██╗ ██╔╝██╔═══██╗██║   ██║
// ██║  ██║██║   ██║     ╚████╔╝ ██║   ██║██║   ██║
// ██║  ██║██║   ██║      ╚██╔╝  ██║   ██║██║   ██║
// ██████╔╝╚██████╔╝       ██║   ╚██████╔╝╚██████╔╝
// ╚═════╝  ╚═════╝        ╚═╝    ╚═════╝  ╚═════╝
// ██╗    ██╗ █████╗ ███╗   ██╗████████╗    ████████╗ ██████╗
// ██║    ██║██╔══██╗████╗  ██║╚══██╔══╝    ╚══██╔══╝██╔═══██╗
// ██║ █╗ ██║███████║██╔██╗ ██║   ██║          ██║   ██║   ██║
// ██║███╗██║██╔══██║██║╚██╗██║   ██║          ██║   ██║   ██║
// ╚███╔███╔╝██║  ██║██║ ╚████║   ██║          ██║   ╚██████╔╝
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝          ╚═╝    ╚═════╝
// ██████╗ ██╗      █████╗ ██╗   ██╗    ██╗    ██╗██╗████████╗██╗  ██╗
// ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝    ██║    ██║██║╚══██╔══╝██║  ██║
// ██████╔╝██║     ███████║ ╚████╔╝     ██║ █╗ ██║██║   ██║   ███████║
// ██╔═══╝ ██║     ██╔══██║  ╚██╔╝      ██║███╗██║██║   ██║   ██╔══██║
// ██║     ███████╗██║  ██║   ██║       ╚███╔███╔╝██║   ██║   ██║  ██║
// ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝        ╚══╝╚══╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝
// ███╗   ███╗███████╗██████╗
// ████╗ ████║██╔════╝╚════██╗
// ██╔████╔██║█████╗    ▄███╔╝
// ██║╚██╔╝██║██╔══╝    ▀▀══╝
// ██║ ╚═╝ ██║███████╗  ██╗
// ╚═╝     ╚═╝╚══════╝  ╚═╝
