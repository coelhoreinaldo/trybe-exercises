// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let ast = '*';
let final = '';

for (let i = 0; i < n; i += 1) {
    if (n > 1) {
        final = ast //por que isso aqui muda tudo??? por que não dá o mesmo resultado do exercício 3-2? não entendo loop dentro de loop)
        for (let j = 1; j < n; j += 1) {
            final += ast       
        }
        console.log(final);
    } 
}