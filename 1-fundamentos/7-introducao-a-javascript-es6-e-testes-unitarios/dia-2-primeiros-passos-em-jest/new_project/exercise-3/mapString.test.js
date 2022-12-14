const { encode, decode } = require('./mapString');

describe ('as funções encode, decode e mapString', () => {
  it ('a função encode e decode devem ser funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it ('should work fine', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    expect(encode('a, b, c, d, e')).toBe('1, b, c, d, 2');
    expect(decode('1, b, c, d, 2')).toBe('a, b, c, d, e');
  });
  it ('should verifiy the length of both strings', () => {
    expect(encode('reinaldo').length).toEqual(8);
  });
  
});