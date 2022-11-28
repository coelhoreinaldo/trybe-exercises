// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let ast = '*';
let final = '';

for (let i = 1; i <= n; i += 1) {
    if (n > 1) {
        final += ast;
        console.log(final);
        continue
    }
}

