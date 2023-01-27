
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const curriculum = {
  ...user, ...jobInfos
} 

const { name, age, nationality, profession, squad, squadInitials } = curriculum;

console.log(`Hi my name is ${name}, I'm ${age} old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`)