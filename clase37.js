// ARRAYS

const animales = [perro, gato, pez, hamster, canario];

console.log(animales);

animales[3]//para obtener el cuarto elemento del array. Los indices comienzan en 0

animales[3] + " Blanco" //concateno pero no modifico el array

animales[5]="Delfin"; //agrego un elemento mas al array

animales[6]="Jirafa";
animales[10]="Elefante"//saltea los espacios intermedios y lo agrega en el indice indicado

animales[1]="Caballo"//para reemplazar valores en el array. Reemplaza el elemento en el indice 1

animales[2+4] // se puede acceder dinamicamente a los valores de un array

const index = 3;
animales[index];

animales[animales.length]="Buho"; //agrega en la ultima posicion

animales.push("Orca"); //agrega en la ultima posicion del array

animales.push["Mariposa", "Grillo"]; //agrega multiples valores de una sola vez

animales.unshift("Iguana"); //agrega elementos al ppio, modificando los indices del resto

animales.pop(); //devuelve el ultimo valor y lo elimina del arreglo

animales.shift();//extrae el primer elemento del array

//Ejercicio

for(let i=0; i<animales.length; i++){
    console.log(`El animal ${i+1} es ${animales[i]}`);
}




