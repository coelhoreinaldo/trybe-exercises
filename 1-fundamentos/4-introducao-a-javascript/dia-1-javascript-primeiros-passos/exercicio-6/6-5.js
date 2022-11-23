const a = 10;
const b = 80;
const c = 90;

const somaTotal = a + b + c;

if (somaTotal === 180) {
    console.log(true)
} else if (a < 0 || b < 0 || c < 0) {
    console.log('ERROR, um ou mais lados tem um valor negativo') 
} else {
    console.log(false)
}