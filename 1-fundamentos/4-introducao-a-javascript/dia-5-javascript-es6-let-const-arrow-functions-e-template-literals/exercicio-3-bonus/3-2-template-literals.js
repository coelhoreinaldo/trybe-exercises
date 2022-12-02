// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills;

// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

// Declare dentro da função uma variável com o nome skills, do tipo const;

// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:

// Tryber Bebeto aqui!

// Minhas três principais habilidades são:

// JavaScript
// HTML
// CSS

const substituaX = (name) => {
    const phrase = 'Tryber x aqui!';
    let phraseSplit = phrase.split('');
    for (let letter in phraseSplit) {
        if (phraseSplit[letter] === 'x') {
            phraseSplit[letter] = name;
        }
    }
    return phraseSplit.join('')
}

// console.log(substituaX('Reinaldo'));

const minhasSkills = (param) => {
    const skills = ['JavaScript', 'HTML', 'CSS']
    let phrase = `
${param}
Minhas três principais habilidades são:`;
for (let i = 0; i < skills.length; i += 1){
    phrase = `${phrase} 
    - ${skills[i]}`;
}
    return phrase
}

console.log(minhasSkills(substituaX('Reinaldo')));