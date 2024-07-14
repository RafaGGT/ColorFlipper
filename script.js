const colors = [
  "Purple",
  "Rgba(255, 99, 71, 0.6)",
  "#00ff00",
  "Orange",
  "Rgba(75, 0, 130, 0.7)",
  "#Ffd700",
  "Cyan",
  "#Ff4500",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // funcion del boton
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber]; // modificacion del background
  color.textContent = colors[randomNumber]; // modificacion del nombre segun el color presentado en pantalla
  color.style.color = colors[randomNumber]; // modificacion del color de las letras
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // funcion que permite escoger un numero entero aleatorio en base a los elementos del array
}
