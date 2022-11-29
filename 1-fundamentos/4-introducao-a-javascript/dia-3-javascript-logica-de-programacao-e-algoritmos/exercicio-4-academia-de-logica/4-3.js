let result = null;

for (let i = 1; i <= 50; i += 1) {
    if (i % 3 === 0) {
        result += 1;
    }
}

if (result >= 50) {
    console.log('Há 50 ou mais números divisíveis por 3.');
} else {
    console.log('Sequência muito pequena.');
}


// console.log(result);
// if (i % 3 === 0) {
//     oddNumbers += i + ' ';
// }