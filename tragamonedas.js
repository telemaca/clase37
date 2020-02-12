// Tragamonedas

// Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado

const symbols = prompt(`Ingrese 5 símbolos:`)
const symbolsArray = symbols.split(" ")


if ((symbolsArray[0] === symbolsArray[1]) && (symbolsArray[0] === symbolsArray[2]) && (symbolsArray[0] === symbolsArray[3]) && (symbolsArray[0] === symbolsArray[4])) {
    alert(`¡Felicitaciones! Has ganado.`)
} else {
    alert(`¡Has perdido! Inténtalo nuevamente.`)
}