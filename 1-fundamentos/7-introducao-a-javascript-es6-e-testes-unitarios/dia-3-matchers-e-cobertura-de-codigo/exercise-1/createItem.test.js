const createItem = require('./createItem');
describe('a função createItem', () => {
  it ('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('name', 'banana');
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('quantity', 20);
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('unit', 'kg');
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('price', 1.99);
  });
  it ('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0);
  });
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});