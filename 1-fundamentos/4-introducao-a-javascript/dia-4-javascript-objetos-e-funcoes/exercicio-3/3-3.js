// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
let result = null;

function bigger (a, b) {
    if (a > b) {
        result = a + ' é maior que ' + b;
    } else if (b > a) {
        result = b + ' é maior que ' + a;
    } else {
        result = 'Os números são iguais.'
    }
    return result
}

console.log(bigger(-2, 26));