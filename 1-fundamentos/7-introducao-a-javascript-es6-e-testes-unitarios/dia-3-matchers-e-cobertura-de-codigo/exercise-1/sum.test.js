const sum = require('./sum');

describe('sum function', () => {
  it ('should return the sum result', () =>{
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it ('should throw a error when sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow(Error);
    expect(() => sum(4, '5')).toThrow('parameters must be numbers')
  });
});