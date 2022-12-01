// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

let biggestWord = '';


const verificaBiggestWord = (phrase) => {
    const phraseSplit = phrase.split(' ');
    // console.log('phrasesplit', phraseSplit);
    let verifica = null;
    for (let word in phraseSplit) {
        verifica = phraseSplit[word]
        // console.log('verifica', verifica);
        if (verifica.length > biggestWord.length) {
            biggestWord = verifica;
            // console.log('biggestWord', biggestWord);
        }
    }
    return biggestWord
}

console.log(verificaBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));