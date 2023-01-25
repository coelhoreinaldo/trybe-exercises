const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = numbers.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc + curr : acc;
}, 0)

console.log(sum);