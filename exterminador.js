// Exterminador

// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes. Ejemplo:

// Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

const animales = prompt(`Ingrese animales:`);
const animalesArray = animales.split(` `);
let newArray = [];
let animal = "";

for (let i=0; i<animalesArray.length; i++){
    if ((animalesArray[i] !== "🦟") && (animalesArray[i] !== "🦂")) {
        newArray.push(animalesArray[i])
    }    
}

alert(`Animales sin insectos: [${newArray}]`)