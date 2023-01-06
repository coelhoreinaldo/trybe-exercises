const pessoaEstudante = {};

const addPropriety = (object, propriety, value) => {
  object[propriety] = value;
};

addPropriety(pessoaEstudante, 'firstName', 'Reinaldo');
addPropriety(pessoaEstudante, 'email', 'coelho@trybe.com');
addPropriety(pessoaEstudante, 'phone', '4002-8922');
addPropriety(pessoaEstudante, 'github', 'https://github.com/coelhoreinaldo');
addPropriety(pessoaEstudante, 'linkedin', 'https://www.linkedin.com/in/coelhoreinaldo/');

console.log(pessoaEstudante);