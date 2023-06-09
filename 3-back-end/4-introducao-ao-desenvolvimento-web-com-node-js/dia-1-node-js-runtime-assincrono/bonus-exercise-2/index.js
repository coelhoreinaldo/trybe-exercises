const promiseExercise = async (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números.'));
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error('Valor muito baixo.'))
    }
    console.log(result);
    return result;
  })
};

promiseExercise(45, 3, 4)