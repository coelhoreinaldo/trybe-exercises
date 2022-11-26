let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumResult = [];

for (let i = 0; i < numbers.length; i += 1) {
    // console.log(numbers[i])
    if (i + 1 < numbers.length) {
        sumResult.push(numbers[i] * numbers[i + 1])
        // console.log('sum result if' + sumResult)
    } else {
        sumResult.push(numbers[i] * 2)
        // console.log('sum result else ' + sumResult)
    }
}
console.log(sumResult); 

//maior dificuldade: na linha 7 eu estava colocando ~ (numbers[i] + 1), ao invés de numbers[i + 1]... ):