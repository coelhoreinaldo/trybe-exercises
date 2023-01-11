const { mapString, encode, decode } = require('./mapString');

describe ('as funções encode, decode e mapString', () => {
  it ('a função encode e decode devem ser funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it ('a função encode e decode deve funcionar corretamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
});