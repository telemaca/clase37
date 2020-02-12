// Germinación

// Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:

// Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
// ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

const floresYPlantines = prompt(`Ingrese flores y plantines separados por un espacio. \nDebe ingresar el tipo de flor antes de ingresar cuántos plantines hay de cada una.`)

const floresYPlantinesArray = floresYPlantines.split(" ");

let plantin = "plantin"
let flower = ""
let bloom = ""

console.log(floresYPlantinesArray)

if (floresYPlantinesArray[0] === plantin) {
    alert(`La lista no puede comenzar con un plantín.`)
} else {
    for (i=1; i<floresYPlantinesArray.length; i++) {
        
        if(floresYPlantinesArray[i] === plantin){
            floresYPlantinesArray[i] = floresYPlantinesArray[i-1];
        }
        console.log(floresYPlantinesArray);
          
    }
}
