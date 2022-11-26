//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];

for (let i = 1; i < 26; i += 1) {
    array.push(i);  
}

let division = 2;
let result = 0;
for (let i = 0; i < array.length; i += 1) {
    result = array[i] / division;
    console.log(result);
}

