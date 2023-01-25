// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sum = numbers.reduce((acc, curr) => {
//   return curr % 2 === 0 ? acc + curr : acc;
// }, 0)

// console.log(sum);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers)); // 152