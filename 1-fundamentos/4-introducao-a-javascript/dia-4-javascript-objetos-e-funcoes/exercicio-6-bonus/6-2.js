// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.



let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
    let arrayEven = [];
    for (let i = 0; i < vector.length; i += 1) {
        let aux = vector[i]; // variável criada para guardar o valor de vetor no índice 0, no caso, [1, 2];
        console.log('aux ', aux);
        for (let j = 0; j < aux.length; j += 1) { // esse segundo loop, vai percorrer o aux, que no caso agora é [1, 2]
            let current = aux[j]; // eaí essa variável vai guardar o valor do índice 0 em auxiliar, que no caso agora é 1

            if (current % 2 === 0) { // aqui ele vai verificar, 1 é dividido por 2? não... 2 é dividido por 2? sim, então joga ele no arrayEven.
                arrayEven.push(current);
            }
        }
    }
    return arrayEven;
}

console.log(arrayOfNumbers(vector));