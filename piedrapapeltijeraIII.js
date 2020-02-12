const user1Name = prompt(`Ingrese el nombre de la jugadora 1:`)
const user1Scores = prompt(`Ingrese jugadas de ${user1Name}:`)

const user2Name = prompt(`Ingrese el nombre de la jugadora 2:`)
const user2Scores = prompt(`Ingrese jugadas de ${user2Name}:`)

const user1ScoresArray = user1Scores.split(" ");
const user2ScoresArray = user2Scores.split(" ");

let user1FinalScore = 0;
let user2FinalScore = 0;

// CON IF:

// for (let i = 0; i < user1ScoresArray.length; i++) {
//     if (user1ScoresArray[i] === "piedra") {
//         if (user2ScoresArray[i] === "tijera") {
//             user1FinalScore++;
//         } else if (user2ScoresArray[i] === "papel") {
//             user2FinalScore++;
//         }
//     } else if (user1ScoresArray[i] === "papel") {
//         if (user2ScoresArray[i] === "piedra") {
//             user1FinalScore++;
//         } else if (user2ScoresArray[i] === "tijera") {
//             user2FinalScore++;
//         }
//     } else if (user1ScoresArray[i] === "tijera") {
//         if (user2ScoresArray[i] === "papel") {
//             user1FinalScore++;
//         } else if (user2ScoresArray[i] === "piedra") {
//             user2FinalScore++;
//         }
//     }
// }

// CON SWITCH:

for (let i = 0; i < user1ScoresArray.length; i++) {

    switch (user1ScoresArray[i]) {
        case "piedra":
            switch (user2ScoresArray[i]) {
                case "tijera":
                    user1FinalScore++;
                    break;
                case "papel":
                    user2FinalScore++;
                    break;
            }
            break;
        case "tijera":
            switch (user2ScoresArray[i]) {
                case "papel":
                    user1FinalScore++;
                    break;
                case "piedra":
                    user2FinalScore++;
                    break;
            }
            break;
        case "papel":
            switch (user2ScoresArray[i]) {
                case "piedra":
                    user1FinalScore++;
                    break;
                case "tijera":
                    user2FinalScore++;
                    break;
            }
            break;
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