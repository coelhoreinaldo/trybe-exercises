// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function totalSum (n) {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
        result += i;
    }
    return result;
}

console.log(totalSum(5)); // Valor esperado no retorno da função: 1+2+3+4+5 = 15.

