let fatorial = 1;

for (let i = 1; i <= 10; i += 1) {
    fatorial *= i;
    console.log(fatorial);  
}

console.log(fatorial);

/* Gabarito
let fatorial = 1;

for (let i = 10; i > 0; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);*
// a diferença é que começou o índice no 10, ele rodou enquanto era maior que 0, executava o fatorial vezes i, depois decrementava - 1 do index.*/