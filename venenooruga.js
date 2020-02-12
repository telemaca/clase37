const orugasVenenoPlantas = prompt("Ingrese un listado con plantas, una oruga y un veneno separados por espacios; el veneno debe estar a la derecha de la oruga, separados por plantas");

const plantasArray = orugasVenenoPlantas.split(" ")

let indexOruga = plantasArray.indexOf("oruga")
let indexVeneno = plantasArray.indexOf("veneno")

let firstPartArray = []
let secondPartArray = []

for (let i = 0; i <indexOruga; i++) {
    firstPartArray += plantasArray[i] + " "
}

for (let i = plantasArray.length; i > indexVeneno + 1; i--) {
    secondPartArray += plantasArray.pop() + " "
}

alert(firstPartArray + secondPartArray)