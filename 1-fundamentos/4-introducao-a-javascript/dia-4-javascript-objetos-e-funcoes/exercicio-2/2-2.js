let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let info in car) {
    console.log(info + ': ' + car[info]);
  }