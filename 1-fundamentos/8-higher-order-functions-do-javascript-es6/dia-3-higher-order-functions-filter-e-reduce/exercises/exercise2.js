const data = require('../data');

const expectedResult = 120797034;

const getPopulation = () => {
  const maped = data.countries.map((element) => element.population)
  return maped.reduce((acc, curr) => acc + curr, 0);
}

console.log(getPopulation());
