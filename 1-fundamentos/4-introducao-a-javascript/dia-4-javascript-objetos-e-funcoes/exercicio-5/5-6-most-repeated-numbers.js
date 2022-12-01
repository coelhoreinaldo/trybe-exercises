// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(numbers) {
    let contRepeated = null;
    let contNum = null;
    let repeatedIntegerIndex = null;

    for (let i in numbers) {
        let verificaNumber = numbers[i];
        console.log('verificaNumber ',verificaNumber);
        for (let i2 in numbers) {
            if (verificaNumber === numbers[i2]) {
                contNum += 1;
            }
            console.log('contNum ', contNum);
        }
        if (contNum > contRepeated) {
            contRepeated = contNum;
            repeatedIntegerIndex = i;
            console.log('contRepeated ', contRepeated);
            console.log('repeatedIntegerIndex ', repeatedIntegerIndex);
        }
        contNum = 0;
    }
    return numbers[repeatedIntegerIndex]
}
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3])); // Valor esperado no retorno da função: 2.