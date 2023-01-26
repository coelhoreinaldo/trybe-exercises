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

const expectedResult = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}

const longestName = () => {
  return data.countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
} //país com maior numero de caracteres no nome

console.log(longestName()); 