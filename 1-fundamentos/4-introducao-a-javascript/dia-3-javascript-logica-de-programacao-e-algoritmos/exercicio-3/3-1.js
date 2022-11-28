let n = 5;
let ast = '*';
let final = '';

for (let i = 1; i <= n; i += 1) {
    if (n > 1) {
        final = ast
        for (let j = 1; j <= n; j += 1) {
            final += ast       
        }
        console.log(final);
    } 
}