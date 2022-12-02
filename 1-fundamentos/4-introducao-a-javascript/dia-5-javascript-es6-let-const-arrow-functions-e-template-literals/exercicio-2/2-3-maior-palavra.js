// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

let biggestWord = '';


const verificaBiggestWord = (phrase) => {
    const phraseSplit = phrase.split(' ');
    let verifica = null;
    for (let word in phraseSplit) {
        verifica = phraseSplit[word]
        if (verifica.length > biggestWord.length) {
            biggestWord = verifica;
        }
    }
    return biggestWord
}

console.log(verificaBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));