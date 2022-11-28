
let n = 5;
let ast = '*';
let final = '';
let inputPosition = n - 1;


for (let iLine = 0; iLine < n; iLine += 1) {
        for (jColumn = 0; jColumn < n; jColumn += 1){
        if (inputPosition > jColumn) {
            final = final + ' ';
        }  else {
            final = final + ast;
        }
    }
    console.log(final);
    final = '';
    inputPosition -= 1;
}


// for (let i = n; i >= 0; i += 1) {
//     if (n > 1) {
//         final += space;
//         console.log(final);
//         continue
//     }
// }

