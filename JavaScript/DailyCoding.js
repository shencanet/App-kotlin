 /*
 Alice quiere unirse al club de estudiantes de probabilidad de su escuela. Las cuotas de membresía se calculan a través de uno de dos juegos probabilísticos simples.

El primer juego: tirar un dado repetidamente. Deja de rodar una vez que obtengas un cinco seguido de un seis. Su número de rollos es la cantidad que paga, en dólares.

El segundo juego: lo mismo, excepto que la condición de parada es un cinco seguido de un cinco.

¿Cuál de los dos juegos debería elegir Alicia para jugar? ¿Importa siquiera? Escriba un programa para simular los dos juegos y calcule su valor esperado
Para determinar cuál de los dos juegos debería elegir Alice, podemos calcular el valor esperado para cada juego y luego compararlos. El valor esperado representa el promedio ponderado de todas las posibles ganancias o pérdidas en un juego, considerando las probabilidades de cada resultado.

Aquí tienes un programa en JavaScript que simula ambos juegos y calcula sus valores esperados:

javascript

function simulateGame(rolls, targetSequence) {
    let consecutiveRolls = 0;
    let totalRolls = 0;

    while (consecutiveRolls < targetSequence.length) {
        const roll = Math.floor(Math.random() * 6) + 1;
        totalRolls++;

        if (roll === targetSequence[consecutiveRolls]) {
            consecutiveRolls++;
        } else {
            consecutiveRolls = 0;
        }
    }

    return totalRolls;
}

function calculateExpectedValue(targetSequence, numSimulations) {
    let totalRolls = 0;

    for (let i = 0; i < numSimulations; i++) {
        totalRolls += simulateGame(0, targetSequence);
    }

    return totalRolls / numSimulations;
}

const numSimulations = 100000;
const game1ExpectedValue = calculateExpectedValue([5, 6], numSimulations);
const game2ExpectedValue = calculateExpectedValue([5, 5], numSimulations);

console.log(`Expected value for Game 1: ${game1ExpectedValue}`);
console.log(`Expected value for Game 2: ${game2ExpectedValue}`);

if (game1ExpectedValue < game2ExpectedValue) {
    console.log("Alice should choose Game 1.");
} else if (game1ExpectedValue > game2ExpectedValue) {
    console.log("Alice should choose Game 2.");
} else {
    console.log("It doesn't matter which game Alice chooses.");
}

Este programa simula ambos juegos un gran número de veces (controlado por numSimulations) y luego calcula el valor esperado para cada juego. Finalmente, compara los valores esperados y le indica a Alice cuál juego debería elegir en función de los resultados.

Recuerda que los valores esperados pueden variar ligeramente con cada ejecución debido a la naturaleza aleatoria de los juegos. Ejecutar el programa varias veces con un número suficiente de simulaciones te dará una idea más precisa de qué juego es mejor en promedio.

*/

// Función para simular un juego dado una secuencia objetivo
function simulateGame(targetSequence) {
    let consecutiveRolls = 0;
    let totalRolls = 0;

    // Simular el juego hasta que se alcance la secuencia objetivo
    while (consecutiveRolls < targetSequence.length) {
        const roll = Math.floor(Math.random() * 6) + 1;
        totalRolls++;

        if (roll === targetSequence[consecutiveRolls]) {
            consecutiveRolls++;
        } else {
            consecutiveRolls = 0;
        }
    }

    return totalRolls; // Devolver el número de rolls necesarios
}

// Función para calcular el valor esperado dado una secuencia objetivo y el número de simulaciones
function calculateExpectedValue(targetSequence, numSimulations) {
    let totalRolls = 0;

    // Realizar las simulaciones
    for (let i = 0; i < numSimulations; i++) {
        totalRolls += simulateGame(targetSequence);
    }

    return totalRolls / numSimulations; // Calcular el valor esperado promediando los rolls
}

const numSimulations = 100000; // Número de simulaciones

// Calcular los valores esperados para ambos juegos
const game1ExpectedValue = calculateExpectedValue([5, 6], numSimulations);
const game2ExpectedValue = calculateExpectedValue([5, 5], numSimulations);

// Imprimir los valores esperados
console.log(`Expected value for Game 1: ${game1ExpectedValue}`);
console.log(`Expected value for Game 2: ${game2ExpectedValue}`);

// Comparar los valores esperados y dar una recomendación a Alice
if (game1ExpectedValue < game2ExpectedValue) {
    console.log("Alice should choose Game 1.");
} else if (game1ExpectedValue > game2ExpectedValue) {
    console.log("Alice should choose Game 2.");
} else {
    console.log("It doesn't matter which game Alice chooses.");
}
/*Este programa hace uso de funciones para simular un juego y calcular el valor esperado. Se realizan un número de simulaciones especificado por numSimulations, y luego se comparan los valores esperados para ambos juegos para determinar cuál juego es más favorable en términos de costo esperado.*/