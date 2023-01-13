// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const findDetail = (object, detail) => {
  return object[detail]
}
// Pesquisa

const searchEmployee = (id, detail) => {
  let values = Object.values(professionalBoard);
  let employee = '';
  
  for (let i of values) {
    if (i.id === id) {
      employee = i;
    } 
  }

  if (!employee) {
    throw new Error ('ID não identificada');
  }

  if (!employee[detail]) {
    throw new Error ('Informação indisponível');
  }


  return employee[detail];
};



console.log(searchEmployee('9852-2-2', 'specialities'));

module.exports = { professionalBoard, searchEmployee }