const firstList = prompt(`Ingrese la primera lista de números`)
const secondList = prompt(`Ingrese la segunda lista de números`)


const firstListArray = firstList.split(" ");
const secondListArray = secondList.split(" ");

let sameArrays = true; 

if (firstListArray.length === secondListArray.length) {

    for (i=0; i<firstListArray.length; i++) {
        if (firstListArray[i] !== secondListArray[i]) {
            sameArrays = false;
        }
    }

    if (sameArrays) {
        alert(`Las listas son iguales.`)
    } else {
        alert(`Las listas no son iguales.`)
    }
} else {
    alert (`Las listas no son iguales.`)
} 

// SOLUCION FACIL:

// if (firstList === secondList) {
//     alert(`Las listas son iguales.`)
// } else {
//     alert(`Las listas no son iguales.`)
// }