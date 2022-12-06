/*
04 - Verifique se todos os dados de uma lista são do mesmo tipo
Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.
Se todos forem retorne:
------
true
------
Caso contrário:
-------
false
-------
Obs: Os retornos tem que ser dados do tipo boolean.
*/

function dataType(types) {
    let verifyTypes = true;
    for (let i = 0; i < types.length; i += 1) {
        let guarda = typeof types[i];
        for (let j = 0; j < types.length; j += 1) {
            let guardaj = typeof types[j];
            if (guarda !== guardaj) {
                verifyTypes = false;
            }
        }
        return verifyTypes
    }
}

// function dataType(types) {
//     const typeOfFirst = typeof types[0];
//     for (let elements of types) {
//       if (typeOfFirst !== typeof elements) {
//         return false;
//       }
//     }

console.log(dataType([7, 'Olá', true, [1, 2, 3, 4], curiosidades = { cor: 'azul', numero: 7 }]));

console.log(dataType([7, 2, 3, 4, 5]));