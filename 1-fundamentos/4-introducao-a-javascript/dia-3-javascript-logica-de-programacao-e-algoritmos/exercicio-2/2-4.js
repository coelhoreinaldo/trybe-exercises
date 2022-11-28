// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let dividend = 2; dividend <= 50; dividend += 1) {
    let isPrime = true;
    for (let divisor = 2; divisor < dividend; divisor += 1) {
        if (dividend % divisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrimeNumber = dividend;
    }
}

console.log(biggestPrimeNumber);

