// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.


function verificaLowerNumber(numbers){

    let lowerNumber = numbers.length - 1;
    for (let number in numbers){
            if(numbers[number] < lowerNumber){
                lowerNumber = number;
            } 
        }    
        return lowerNumber
}

console.log(verificaLowerNumber([2, 4, 6, 7, 10, 0, -3]));