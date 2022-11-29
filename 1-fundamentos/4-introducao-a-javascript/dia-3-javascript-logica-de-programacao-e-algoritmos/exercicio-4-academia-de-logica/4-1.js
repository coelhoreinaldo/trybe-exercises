let numbers = [1, 4, 27, 44, 327, 557, 47, 67, 77];
let value = 77;
let result = null;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === value) {
        result += numbers[i];
    } 
}

if (result === null){
    console.log('Elemento não encontrado no array');
} else {
    console.log(result);
}
//for
//if

