const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor
};

adicionaPropriedade(customer, newKey, lastName);
console.log(customer);

newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;

adicionaPropriedade(customer, newKey, fullName);
console.log(customer);