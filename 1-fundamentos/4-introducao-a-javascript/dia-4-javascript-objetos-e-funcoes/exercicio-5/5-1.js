function isPalidrome(str) {
    let reverse = str.split('').reverse().join('');
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalidrome('arara'));