function isPalidrome (str){
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
         reverse += str[i];
    }
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalidrome('arara'));
