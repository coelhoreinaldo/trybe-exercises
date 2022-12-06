/*
03 - Encontre uma pessoa convidada em uma lista de nomes
Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 
Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------
Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------
*/

function findGuest(names, guest){
    let message = null;
    let findKa = false;

    for(let i = 0; i < names.length; i += 1) {
        if (guest.toLowerCase() === names[i].toLowerCase()) {
        findKa = true;
    }
        if (findKa) {
            message = 'O nome está na lista'
        } else {
            message = 'O nome não está na lista'
        }
    }
    return message
}

  
console.log(findGuest(['Maria', 'João', 'Reinaldo', 'Tanaka', 'Yamada'], 'Tanaka'));