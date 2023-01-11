const { encode, decode } = require('./mapString');

describe ('as funções encode, decode e mapString', () => {
  it ('a função encode e decode devem ser funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it ('a função encode e decode deve funcionar corretamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    expect(encode('a, b, c, d, e')).toBe('1, b, c, d, 2');
    expect(decode('1, b, c, d, 2')).toBe('a, b, c, d, e');
  });
  it ('a string retornada pela função deve ter o mesmo numero de caracteres que a string passada como parâmetro', () => {
    expect(encode('reinaldo').length).toEqual(8);
  });
  
});