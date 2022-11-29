// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let ast = '*';
let final = '';

if (n > 1)  
for (let i = 1; i <= n; i += 1) {
        final += ast; //como ele entende que é pra colocar 2, depois 3 asterisco, depois 4, depois 5????
        // console.log(final);
        continue
}
for (let j = 1; j <= n; j += 1) {
    console.log(final);
}
