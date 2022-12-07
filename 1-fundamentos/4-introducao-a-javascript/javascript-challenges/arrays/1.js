/*
01 - Encontre o maior número de um array
Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.
*/

function getMaxNumber(numbers) {
    let keepNumber = null;
    for (let number of numbers) {
        if (number > keepNumber){ 
        keepNumber = number;
        }
    }
    return keepNumber;
}

console.log(getMaxNumber([1, 2, 3, 42, 4, 5, 6]));