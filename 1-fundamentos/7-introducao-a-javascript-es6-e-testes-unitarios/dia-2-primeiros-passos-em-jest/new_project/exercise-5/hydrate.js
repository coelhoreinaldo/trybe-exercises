const hydrate = (order) => {
  const reg = /\d+/g; //
  const result = order.match(reg);
  let convertNumbers = null;
  let converted = null;

  for (let i = 0; i < result.length; i += 1) {
    convertNumbers = Number(result[i]);
    console.log(convertNumbers);
    converted += convertNumbers;
  }

  if (converted === 1) {
    return `${converted} copo de água`;
  } if (converted > 1) {
    return `${converted} copos de água`;
  }
};

module.exports = hydrate;