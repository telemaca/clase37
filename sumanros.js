//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:

// Ingrese números: 5 7 10 12 24

// La suma de todos los números es: 58

const numeros = prompt("Ingrese numeros separados por espacios");
const numerosArray=numeros.split(' ');
let suma = 0;

for(i=0; i<numerosArray.length; i++){
    suma+=Number(numerosArray[i]);
}
alert(`La suma de los numeros es ${suma}`);