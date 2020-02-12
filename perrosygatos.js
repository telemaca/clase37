// Perros y gatos

// Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// // Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// // Resultado: 🐶🐶🐶🐶🐱🐱🐱

const dogsAndCats = prompt("Ingrese cuántos perros y gatos hay separados por un espacio");
const dogsAndCatsArray = dogsAndCats.split(' ');

let dogs = "🐶 ";
let cats = "🐱 ";
let dogArray = "";
let catArray = "";

for(i=0; i<dogsAndCats.length; i++){

    if(dogsAndCatsArray[i]==="perro"){
        dogsAndCatsArray[i] = dogs;
        dogArray += dogs;
    } else if(dogsAndCatsArray[i]==="gato"){
        dogsAndCatsArray[i] = cats;
        catArray += cats;
    }
}

alert(`Resultado: ${dogArray}${catArray}`)