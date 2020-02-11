//Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// Cuántas bananas come un mono?: 2
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭

const monosYBananas = prompt("Ingrese monos y bananas");
const monosYBananasArray = monosYBananas.split(' ');
const bananasPorMono = Number(prompt("Ingrese cuantas bananas come un mono"));
let monos = 0;
let bananas = 0;

for(i=0; i<monosYBananasArray.length; i++){
    if(monosYBananasArray[i]==="mono"){
        monos++;
    } else if(monosYBananasArray[i]==="banana"){
        bananas++;
    }
}

let haySuficientes = (bananas/bananasPorMono>=monos);
if(haySuficientes){
    alert("Hay suficientes bananas");
}else{
    alert("¡Oh no!¡No hay suficientes bananas para los monos! 😭");
}