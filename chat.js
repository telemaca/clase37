const users = prompt(`Ingrese nombres de usuarias:`)
const userArray = users.split(" ")

const restOfUsers = userArray.length - 2;

if (userArray.length === 1) {
    alert(`${userArray[0]} está conectada`)
} else if (userArray.length === 2) {
    alert(`${userArray[0]} y ${userArray[1]} están conectadas`)
} else {    
    alert(`${userArray[0]}, ${userArray[1]} y ${restOfUsers} persona(s) más están conectadas.`)
}