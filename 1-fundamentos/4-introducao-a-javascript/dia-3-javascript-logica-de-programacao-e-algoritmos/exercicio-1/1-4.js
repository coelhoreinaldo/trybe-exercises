const n = 5;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
  resultado += index;
//   console.log(resultado);
};
console.log(resultado)

// resultado += index
// Essa alternativa está correta! O += indica que a cada iteração do _loop for_ a variável resultado é somada ao valor de index e passa a armazenar um novo valor.