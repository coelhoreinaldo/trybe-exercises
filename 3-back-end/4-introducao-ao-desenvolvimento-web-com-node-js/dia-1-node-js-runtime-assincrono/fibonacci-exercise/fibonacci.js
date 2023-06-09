const readline = require('readline-sync');

const number = readline.questionInt('Write a integer number. ')
const calculateFibonacci = (num = number) => {
  if (num <= 0) {
    console.log('Enter a number greater than 0.')
    return;
  }

  let result = [];

  for (let i = 0; i <= num; i += 1) {

    i <= 1 ? result.push(i) : result.push(result[i - 1] + (result[i - 2]))
  }

  result = result.filter((_e, i) => i !== 0)
  console.log(result)
  return result;
}

calculateFibonacci()