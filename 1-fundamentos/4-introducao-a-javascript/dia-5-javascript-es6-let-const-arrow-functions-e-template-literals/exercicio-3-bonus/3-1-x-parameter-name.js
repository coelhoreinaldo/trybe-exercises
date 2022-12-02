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