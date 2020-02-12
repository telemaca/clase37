//Saludos

// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. 

const nombres = prompt("Ingrese varios nombres separados por espacios");

const nombresArray = nombres.split(' ');

let nombre = "";
let message = "";

for(let i=0; i<nombresArray.length; i++){
    nombre = nombresArray[i]
    message += `Hola, ${nombre}\n`
}

alert(message)