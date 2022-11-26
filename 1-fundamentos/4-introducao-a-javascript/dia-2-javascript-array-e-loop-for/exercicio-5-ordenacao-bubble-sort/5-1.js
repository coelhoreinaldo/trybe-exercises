/*Percorra o vetor inteiro comparando elementos adjacentes (dois a dois)
Troque as posições dos elementos se eles estiverem fora de ordem
Repita os dois passos acima (n - 1) vezes, onde n é igual ao tamanho do vetor*/ 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i += 1) {
    // console.log('primeiro loop', numbers[i]);
    for (let j = 0; j < numbers.length - i; j += 1) {
        console.log('segundo loop ', numbers[j]);
        if (numbers[j] > numbers[j + 1]){
            let sort = numbers[j];
            // console.log('sort', sort);
            // console.log('numbers j+1', numbers[j+1]);
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = sort;
        }
    }
}

console.log(numbers);   