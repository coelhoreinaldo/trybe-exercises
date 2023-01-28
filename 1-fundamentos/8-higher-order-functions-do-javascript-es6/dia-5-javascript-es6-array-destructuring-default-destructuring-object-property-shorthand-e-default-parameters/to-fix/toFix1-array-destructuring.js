const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

// sum(primeNumbers[0], primeNumbers[2]) // 54
sum(firstNumber, thirdNumber)