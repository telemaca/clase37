// Multiplicar números individuales

// Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número. El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// Ingrese números: 5 7 15 22 40
// Ingrese multiplicador: 2

// El array resultante es: [10, 14, 30, 44, 80]

const numeros = prompt(`Ingrese números`);
const numerosArray = numeros.split(" ");
const multiplicador = Number(prompt(`Ingrese el multiplicador:`));

let multiplicacion = "";
let resultado = "";

for (let i=0; i<numerosArray.length; i++) {
    multiplicacion = Number(numerosArray[i]) * multiplicador
    resultado += multiplicacion + " "
}

alert(`El array resultante es: [${resultado}]`)