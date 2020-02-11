//Encontrar índice

// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

// Ingrese valores: 5 7 12 34 54 2 12
// Ingrese valor a buscar: 12
    
// El valor 12 se encuentra en el índice 12
// Una vez hecho este ejercicio, investigar el método indexOf.

const numeros = prompt("Ingrese numeros separados por espacios");
const numerosArray=numeros.split(' ');
const valorExistente = Number(prompt("Ingrese el valor que desea averiguar si existe"));
let estaEnLista = true;
for(let i=0; i<numerosArray.length; i++){
    if(valorExistente===Number(numerosArray[i])){
        alert(`El valor ${valorExistente} se encuentra entre los valores originales, su indice es ${i}`);
        estaEnLista=false;
    }
}
if(estaEnLista){
    alert("El valor no existe");
}

// const numerosEjemplo = [1,2,3,4];
// console.log(numerosEjemplo.indexOf(1));

