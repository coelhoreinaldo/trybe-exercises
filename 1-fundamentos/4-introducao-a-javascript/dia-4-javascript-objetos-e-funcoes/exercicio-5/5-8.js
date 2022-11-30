/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. */

function verificaString (stringWord, stringEnding) {
    stringWord = stringWord.split(''); //aqui a gente tá despedaçando a palavra em letrinhas;
    stringEnding = stringEnding.split(''); 
    let verifica = true;  //é o nosso verificador
    if (stringEnding < stringWord) { //esse if é só pra tipo, obrigar o input a escrever uma segunda palavra menor que a primeira
        for (let i = 0; i < stringEnding.length; i += 1) {
            if (stringWord[stringWord.length - stringEnding.length + i] != stringEnding[i]) { // aqui basicamente tá escrito: if t r y b e []]
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