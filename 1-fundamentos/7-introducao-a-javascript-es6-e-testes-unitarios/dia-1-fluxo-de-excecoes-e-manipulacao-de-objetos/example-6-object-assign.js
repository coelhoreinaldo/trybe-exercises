// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// // console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// // console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);