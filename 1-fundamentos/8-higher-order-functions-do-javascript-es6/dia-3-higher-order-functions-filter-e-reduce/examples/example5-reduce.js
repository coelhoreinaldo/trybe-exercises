const numbers = [50, 85, -30, 3, 15];

const reduced = numbers.reduce((bigger, number) => bigger > number ? bigger : number)

console.log(reduced);