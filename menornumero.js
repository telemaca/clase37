//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

// Ingrese números: 5 7 99 34 54 2 12

// El menor número es: 2

const numeros = prompt("Ingrese numeros separados por espacios");
const numerosArray=numeros.split(' ');
let numeroMenor= Infinity;

for(i=0; i<numerosArray.length; i++){
    if(Number(numerosArray[i])<numeroMenor){
        numeroMenor=Number(numerosArray[i]);
    }

}
alert(`El numero menor es ${numeroMenor}`);