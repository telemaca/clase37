//Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:

// Ingrese valores: 5 7 99 34 54 2 12
// Ingrese valor a buscar: 54
    
// El valor 54 se encuentra entre los valores originales

const numeros = prompt("Ingrese numeros separados por espacios");
const numerosArray=numeros.split(' ');
const valorExistente = Number(prompt("Ingrese el valor que desea averiguar si existe"));
let estaEnLista = true;
for(let i=0; i<numerosArray.length; i++){
    if(valorExistente===Number(numerosArray[i])){
        alert(`El valor ${valorExistente} se encuentra entre los valores originales`);
        estaEnLista=false;
    }
}

if(estaEnLista){
    alert("El valor no existe");
}