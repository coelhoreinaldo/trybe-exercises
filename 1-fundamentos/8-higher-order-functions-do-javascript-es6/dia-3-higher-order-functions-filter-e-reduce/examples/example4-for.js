const numbers = [1, 32, 44, 2, 3];
let sumNumbers = 30;
// A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}

console.log(sumNumbers); // 112