// // Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function mostRepeated(numbers) {
//     let mostRepeatedInteger = null;
//     let repeats = null;
//     let indexRepeatedInteger = null;

//     for (let number in numbers) {
//         if (numbers[number] === numbers[number + 1]) {
//             mostRepeatedInteger += numbers[number];
//             indexRepeatedInteger = number;
//             repeats += 1
//         }
//     }
//     return mostRepeatedInteger;
// }
    
// console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3])); // Valor esperado no retorno da função: 2.