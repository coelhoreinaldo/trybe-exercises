// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for (let i = 10; i > 0; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);