const readline = require("readline-sync")

const weight = readline.questionFloat('What\'s your weight? (kg) ');
const height = readline.questionFloat('What\'s your height? (cm) ');

const calculateBMI = () => {
  const heightInCm = height / 100;
  const bmi = (weight / (heightInCm * heightInCm)).toFixed(2)
  console.log(bmi)
  return bmi
};

const main = () => {
  const bmi = calculateBMI();
  if (bmi < 18.5) {
    console.log('Abaixo do peso (magreza)')
    return 'Abaixo do peso (magreza)'
  }
  if (bmi < 24.9) {
    console.log('Peso normal')
    return 'Peso normal'
  }
  if (bmi < 29.9) {
    console.log('Acima do peso (sobrepeso)')
    return 'Acima do peso (sobrepeso)'
  }
  if (bmi < 34.9) {
    console.log('Obesidade grau I')
    return 'Obesidade grau I'
  }
  if (bmi < 39.9) {
    console.log('Obesidade grau II')
    return 'Obesidade grau II'
  }
  console.log('Obesidade graus III e IV')
  return 'Obesidade graus III e IV'
}

main();