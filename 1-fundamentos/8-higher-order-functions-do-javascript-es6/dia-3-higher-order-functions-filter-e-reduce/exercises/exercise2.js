const data = require('../data');

const getPopulation = () => {
  const maped = data.countries.map((element) => element.population)
  return maped.reduce((acc, curr) => acc + curr, 0);
};

getPopulation(); //população total

const getTotalArea = () => {
  const maped = data.countries.map((element) => element.area)
  return maped.reduce((acc, curr) => acc + curr, 0);
};

getTotalArea(); //area total


const longestName = () => {
  return data.countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
} 

longestName(); //país com maior numero de caracteres no nome

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = () => {
  const names = data.countries.map((element) => element.name);
  const namesLetters = names.join('').toLowerCase().split('');
  console.log(namesLetters);
  return namesLetters.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0)
}

countA();