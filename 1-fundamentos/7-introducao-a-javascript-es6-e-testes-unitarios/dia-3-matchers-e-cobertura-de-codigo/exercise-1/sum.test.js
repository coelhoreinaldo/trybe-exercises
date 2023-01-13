const sum = require('./sum');

describe('sum function', () => {
  it ('should return 9 when sum(4, 5)', () =>{
    expect(sum(4, 5)).toBe(9);
  });
  it ('should return 0 when sum(0, 0)', () => {
    expect(sum(0,0)).toBe(0);
  });
  it.todo('should throw a error when sum(4, "5")')
  it.todo('should throw a error message "parameters must be numbers" when sum(4, "5")')
})