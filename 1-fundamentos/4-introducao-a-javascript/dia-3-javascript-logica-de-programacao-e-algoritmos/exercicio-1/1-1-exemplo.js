
// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

// devemos utilizar o array fruits;
// o termo “percorra“ indica uma estrutura de repetição, ou loop;
// “somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo “caso“ indica uma estrutura condicional, ou if;
// “imprima o valor final“ indica um console.log;

// Adicionar o array;
let fruits = [3, 4, 10, 1, 12];
// Criar uma variável com valor 0;
let sumResult = 0;
// Criar um loop que percorre o array;
for (i = 0; i < fruits.length; i += 1) {
    // Incrementar a variável com o valor correspondente a cada loop;
    // sumResult = sumResult + fruits[i];
    sumResult += fruits[i];
}
// Criar um if com a condição de a variável ser maior que 15;
if(sumResult > 15) {
    // Caso a variável obedeça à condição: Imprimir a variável
    console.log(sumResult);
} else {
    // Caso não obedeça à condição: // Imprimir a mensagem “valor menor que 16”.
    console.log('valor menor que 16');
}




