const numeros = prompt(`Ingrese números:`)
const numerosArray = numeros.split(" ")

let inverseArray = [];

for (let i=0; i<numerosArray.length; i++) {
    inverseArray.unshift(numerosArray[i]);
}

alert (`El array invertido es: [${inverseArray}]`)


// O CON REVERSE METHOD:

// const numeros = prompt(`Ingrese números:`)
// const numerosArray = numeros.split(" ")
// const reverseArray = numerosArray.reverse()
// alert (`El array invertido es ${reverseArray}`)