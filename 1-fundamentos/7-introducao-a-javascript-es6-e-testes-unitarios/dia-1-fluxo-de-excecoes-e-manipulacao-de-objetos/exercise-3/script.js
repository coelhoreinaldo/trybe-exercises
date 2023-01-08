const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addPropriety = (object, key, value) => object[key] = value;

addPropriety(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

listKeys(lesson1)

const objectLength = (object) => Object.keys(object).length;

objectLength(lesson1);

const objectValues = (object) => Object.values(object);

objectValues(lesson1)

const allLessons = Object.assign({},{lesson1, lesson2, lesson3})

const studentsNumber = (object) => {
  let totalStudents = 0;
  for (let index in object) {
    totalStudents += object[index].numeroEstudantes;
  }
  return totalStudents
}

console.log(studentsNumber(allLessons));