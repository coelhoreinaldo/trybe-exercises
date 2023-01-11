const myFizzBuzz = require('./myFizzBuzz');

describe('a função myFizzBuzz', () => {
  it ('deve retornar o resultado correto', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
});
