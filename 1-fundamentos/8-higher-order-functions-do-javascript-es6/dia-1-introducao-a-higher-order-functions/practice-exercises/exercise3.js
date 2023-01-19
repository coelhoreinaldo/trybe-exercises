const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1
  } if (studentAnswers === 'N.A') {
    return 0
  }
  return -0.5
}

const counter = (rightAnswers, studentAnswers, toDo) => {
  let total = 0;
  for (let i in rightAnswers) {
    const actionReturn = toDo(rightAnswers[i], studentAnswers[i]);
    total += actionReturn;
  }
  return `Resultado final: ${total} pontos`
};

console.log(counter(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
