//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function bigger (a, b, c) {
    if (a > b && a > c) {
        return a + ' é maior que ' + b + ' e ' + c;
    } else if (b > a && b > c) {
        return b + ' é maior que ' + a + ' e ' + c;
    } else if (c > b && c > a) {
        return c + ' é maior que ' + a + ' e ' + b;
    }
}

console.log(bigger(13, 14, 15));