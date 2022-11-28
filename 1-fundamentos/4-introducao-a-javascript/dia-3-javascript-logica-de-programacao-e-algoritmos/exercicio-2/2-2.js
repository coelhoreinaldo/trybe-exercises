// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'oi camia meu bicho';
let drow = '';

for (i = word.length - 1; i >= 0; i -= 1) {
    // drow += drow[i];
    // console.log(word[i]);
    drow = drow + word[i];
    // console.log('drow loop:', drow);
}
console.log(drow);