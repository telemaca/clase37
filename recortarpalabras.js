// Recortar palabras

// Crear un programa que permita ingresar una lista de palabras separadas por espacios y que pregunta a cuántos caracteres se desea recortar las palabras. El programa debe devolver una lista con las palabras recortadas en esa cantidad de caracteres. Ejemplo:

// Ingrese palabras: elefante sociedad chocolate avion america
// Ingrese cantidad de caracteres permitidos: 4

// Las palabras recortadas son: elef soci choc avio amer

const words = prompt(`Ingrese palabras:`)
const charactersAllowed = Number(prompt(`Ingrese cantidad de caracteres permitidos:`))

const wordsArray = words.split(" ")

let wordCharacters = []
let shortWords = ""

for (let i = 0; i < wordsArray.length; i++) {
    wordCharacters = wordsArray[i].split("")
    
    for (let i = 0; i < charactersAllowed; i++) {
        shortWords += wordCharacters[i]
    }

    shortWords += " "
}

alert(`Las palabras recortadas son: ${shortWords}`)