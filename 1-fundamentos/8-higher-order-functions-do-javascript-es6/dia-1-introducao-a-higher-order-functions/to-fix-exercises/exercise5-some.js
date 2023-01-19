const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((item) => item === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));