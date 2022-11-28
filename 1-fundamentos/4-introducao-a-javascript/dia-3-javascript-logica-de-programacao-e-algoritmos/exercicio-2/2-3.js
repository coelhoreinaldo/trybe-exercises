let array = ['java', 'javascript', 'python', 'html', 'css'];
let higher = array[0];
let lower = array[0];

for (let i = 0; i < array.length; i += 1){
    // console.log('loop for', array[i])
    if (array[i].length > higher.length){
        higher = array[i];        
        // console.log(higher);
    }
}
console.log('A maior palavra é: ' + higher);

for (let i = 0; i < array.length; i += 1){
    // console.log('loop for', array[i])
    if (array[i].length < lower.length){
        lower = array[i];        
        // console.log(lower);
    }
}

console.log('A menor palavra é: ' + lower);