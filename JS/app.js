"use strict";

//Crear un div dentro del body llamado divUser
const divUser = document.createElement("div");
divUser.id = "divUser";
document.body.appendChild(divUser);

//Escribe un texto que ponga el valor del input user
const user = document.getElementById("user");
const h2 = document.createElement("h2");
h2.textContent = user.value;
divUser.appendChild(h2);

// Crear un div para el contador
const divContador = document.createElement("div");
document.body.appendChild(divContador);
divContador.id = "divContador";

// Crear un h3 para el contador
const h3Contador = document.createElement("h3");
h3Contador.classList.add("contador");
h3Contador.textContent = "";
divContador.appendChild(h3Contador);

//Quiero que en H2 se muestre el valor del input user y siempre con la primera letra en mayúscula
user.addEventListener("input", function () {
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

// Un div para el texto del contador
const divTextContador = document.createElement("div");
divTextContador.id = "divTextContador";
document.body.appendChild(divTextContador);

//
// FUNCION PARA ACTIVAR CONTADOR Y OCULTARLO AL FINALIZAR
//

// Iniciar un contador de 10 segundos
let contador;
startGame.addEventListener("click", function () {
  contador = 10;
  let tiempoInicio = Date.now();
  let tiempoFinal = tiempoInicio + contador * 1000;
  const intervalId = setInterval(() => {
    let tiempoRestante = tiempoFinal - Date.now();
    contador = Math.round(tiempoRestante / 1000);
    divTextContador.textContent = `Tiempo restante: ${contador} seg`;
    contador--;

    if (contador < 0) {
      clearInterval(intervalId);
      h3Contador.textContent = "";
      divTextContador.textContent = "";
      divTextContador.classList.add("hidden");
    }
  }, 10);
});

// Crear un div para el contador de intentos
const divIntentos = document.createElement("div");
divIntentos.id = "divIntentos";
divIntentos.textContent = "Intentos: 0";
document.body.appendChild(divIntentos);

//
// FUNCION PARA CREAR LAS TARJETAS
//

window.onload = function () {
  // Restablecer el valor del input "user" a null
  const user = document.getElementById("user");
  user.value = null;
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
