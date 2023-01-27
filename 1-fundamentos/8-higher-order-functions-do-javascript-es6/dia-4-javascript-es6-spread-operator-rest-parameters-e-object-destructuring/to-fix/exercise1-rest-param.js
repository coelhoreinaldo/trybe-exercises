// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', '+ Banana', 'Amendoim'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional] ;

console.log(fruitSalad(specialFruit, additionalItens));
