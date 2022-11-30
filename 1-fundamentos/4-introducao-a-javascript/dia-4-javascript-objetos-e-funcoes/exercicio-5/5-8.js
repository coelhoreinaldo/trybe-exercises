/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. */

function verificaString (stringWord, stringEnding) {
    stringWord = stringWord.split(''); 
    stringEnding = stringEnding.split(''); 
    let verifica = true;  
    if (stringEnding < stringWord) {
        for (let i = 0; i < stringEnding.length; i += 1) {
            if (stringWord[stringWord.length - stringEnding.length + i] != stringEnding[i]) { 
                verifica = false;
            }
        }
        return verifica;
    } else {
        console.log('A segunda palavra deve ser menor que a primeira!');
    }
} 

console.log(verificaString('trybe', 'be')); //Valor esperado no retorno da função: true
console.log(verificaString('joaofernando', 'fernan')); //Retorno esperado: false
console.log(verificaString('reinaldo', 'ldo')); 