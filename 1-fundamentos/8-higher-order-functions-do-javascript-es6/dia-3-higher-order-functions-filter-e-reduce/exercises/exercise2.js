const data = require('../data');

const getPopulation = () => {
  const maped = data.countries.map((element) => element.population)
  return maped.reduce((acc, curr) => acc + curr, 0);
};

getPopulation();

const expectedResult = 4311757;

const getTotalArea = () => {
  const maped = data.countries.map((element) => element.area)
  return maped.reduce((acc, curr) => acc + curr, 0);
};

console.log(getTotalArea());