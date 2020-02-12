const user1Name = prompt(`Ingrese el nombre de la jugadora 1:`)
const user1Scores = prompt(`Ingrese puntajes de ${user1Name}:`)

const user2Name = prompt(`Ingrese el nombre de la jugadora 2:`)
const user2Scores = prompt(`Ingrese puntajes de ${user2Name}:`)

const user1ScoresArray = user1Scores.split(" ");
const user2ScoresArray = user2Scores.split(" ");

let user1FinalScore = 0;
let user2FinalScore = 0;

for (let i = 0; i < user1ScoresArray.length; i++) {
    if (user1ScoresArray[i] > user2ScoresArray[i]) {
        user1FinalScore++;
    } else if (user1ScoresArray[i] < user2ScoresArray[i]) {
        user2FinalScore++;
    } else {
        user1FinalScore++;
        user2FinalScore++;
    }
}

let message = `Resultado: ${user1FinalScore} (${user1Name}) vs ${user2FinalScore} (${user2Name})\n`

if (user1FinalScore > user2FinalScore) {
    alert(message + `Ganadora: ${user1Name}`)
} else if (user1FinalScore < user2FinalScore) {
    alert(message + `Ganadora: ${user2Name}`)
} else {
    alert(message + `Empate`)
}