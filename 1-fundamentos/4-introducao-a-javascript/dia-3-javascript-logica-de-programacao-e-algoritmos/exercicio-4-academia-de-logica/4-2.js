let oddNumbers = '';

for (let i = 1; i <= 50; i += 1) {
    if (i % 2 !== 0) {
        oddNumbers += i + ' ';
    }
}

console.log('Números ímpares: ' + oddNumbers);