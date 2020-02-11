//Saludos

// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. 

const nombres = prompt("Ingrese varios nombres separados por espacios");

const nombresArray = nombres.split(' ');

for(let i=0; i<nombresArray.length; i++){
    console.log(`Hola ${nombresArray[i]}`);
}