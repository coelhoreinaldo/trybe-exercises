const myFizzBuzz = require('./myFizzBuzz');

describe('a função myFizzBuzz', () => {
  it ('deve retornar o resultado correto', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
  })
});
