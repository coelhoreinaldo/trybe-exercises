import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

// Exercise 1

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// console.log(invalidPersonName);

// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

// Exercise 2

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];

// Exercise 4

const math = new Subject('matemática')
const philosophy = new Subject('filosofia')
const history = new Subject('história')

// console.log(math);
// console.log(philosophy);
// console.log(history);

// Exercise 5 

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);
