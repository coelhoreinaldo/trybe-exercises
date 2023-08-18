// ./src/index.ts

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

/* "Converter" */

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

/* "Determinar" */
const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade > 0.7,
  );

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/*
  Não se esqueça que é necessário exportar ao final as funções para que você
  possa testá-las
*/
export {
  getLetterGrades,
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};