//Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑

const frutas = prompt("Ingrese frutas");
const frutasArray = frutas.split(' ');
let manzanas = 0;
let peras = 0;
let duraznos = 0;

for(i=0; i<frutasArray.length; i++){
    if(frutasArray[i]==="manzana"){
        manzanas++;
    } else if(frutasArray[i]==="pera"){
        peras++;
    } else if(frutasArray[i]==="durazno"){
        duraznos++;
    }
    
}

alert(`Ud tiene ${manzanas} manzanas, ${peras} peras y ${duraznos} duraznos`);
