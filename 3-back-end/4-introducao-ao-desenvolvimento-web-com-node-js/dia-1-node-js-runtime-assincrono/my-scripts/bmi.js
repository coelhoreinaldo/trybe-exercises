const readline = require("readline-sync")

const weight = readline.questionInt('What\'s your weight?');
const height = readline.questionFloat('What\'s your height?');

const calculateBMI = () => console.log((weight / (height * height)).toFixed(2));

calculateBMI()