const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // funcion del boton
  let hexColor = "#"; // la sintaxis inicial con la que empieza un color hexadecimal
  for (let i = 0; i < 6; i++) {
    // el bucle que permite la creacion de los 6 digitos
    hexColor += hex[getRandomNumber()]; // la creacion del colo, # + 6 elemento aleatoreos provenientes del array hex
  }
  color.textContent = hexColor; // modificacion del nombre segun el color presentado en pantalla
  color.style.color = hexColor; // modificacion del color de las letras
  document.body.style.backgroundColor = hexColor; // modificacion del background
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length); // funcion que permite escoger un numero entero aleatorio en base a los elementos del array
}
