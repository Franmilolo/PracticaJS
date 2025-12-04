
let nombre = prompt("¿Cual es tu nombre?");
let nacimiento = prompt("¿En que año naciste?");


nacimiento = parseInt(nacimiento);

let añoActual = 2025;


let edad = añoActual - nacimiento;


let resultado = document.getElementById("info");
resultado.textContent = `Hola, ${nombre}. Tienes ${edad} años.`;
