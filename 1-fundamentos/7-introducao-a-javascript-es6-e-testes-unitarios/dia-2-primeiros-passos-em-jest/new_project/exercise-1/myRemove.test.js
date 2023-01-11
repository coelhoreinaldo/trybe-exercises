const {myRemove} = require('./myRemove');

test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})