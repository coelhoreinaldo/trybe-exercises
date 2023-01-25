const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosStrings = dados.filter((item) => typeof item === 'string');
const dadosNotStrings = dados.filter((item) => typeof item !== 'string');

console.log(dadosNotStrings);