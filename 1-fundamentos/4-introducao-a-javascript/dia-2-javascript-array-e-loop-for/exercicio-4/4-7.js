//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if(lower > numbers[i]) {
        lower = numbers[i];
        continue;
    } 
}

console.log(lower);