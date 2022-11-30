/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.*/

function biggestName(names) {
    let biggestName = names[0];
    for (let name in names) {
        if (names[name].length > biggestName.length) {
            biggestName = names[name];
        }
    }
    return biggestName;
}


console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));