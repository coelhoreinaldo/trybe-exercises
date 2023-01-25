const numbers = [50, 85, -30, 3, 15];

// const reduced = numbers.reduce((bigger, number) => bigger > number ? bigger : number)

// console.log(reduced);

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85