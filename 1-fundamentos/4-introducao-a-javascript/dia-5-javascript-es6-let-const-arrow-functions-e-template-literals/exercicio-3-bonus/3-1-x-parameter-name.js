// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX;

// A função deverá receber um nome por parâmetro;

// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

// Exemplo:

// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’



const substituaX = (name) => {
    const phrase = 'Tryber x aqui!';
    let phraseSplit = phrase.split('');
    for (let letter in phraseSplit) {
        if (phraseSplit[letter] === 'x') {
            phraseSplit[letter] = name;
            // console.log(phraseSplit);
        }
    }
    return phraseSplit.join('')
}




console.log(substituaX('Reinaldo'));