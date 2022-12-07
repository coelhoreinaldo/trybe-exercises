/*
02 - Encontre o menor número de um array
Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.
*/

function getMinNumber(numbers) {
    let smallerN = null; 
    for (let number of numbers){
        if (number > smallerN){
            smallerN = number;
        }
    }// Desenvolva seu código nessa função
    return smallerN// Retorne o resultado aqui
  }
  console.log(getMinNumber([1, 35, 5, 10, 15, 20]));