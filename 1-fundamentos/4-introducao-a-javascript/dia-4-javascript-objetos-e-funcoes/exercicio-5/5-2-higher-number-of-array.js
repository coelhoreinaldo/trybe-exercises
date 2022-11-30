//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// [2, 3, 6, 7, 10, 1];

function verificaHigherNumber(numbers){

    let higherNumber = null;
    for (let number in numbers){
            if(numbers[number] > higherNumber){
                higherNumber = number;
            } 
        }    
        return higherNumber
}

console.log(verificaHigherNumber([2, 3, 6, 7, 10, 1]));



