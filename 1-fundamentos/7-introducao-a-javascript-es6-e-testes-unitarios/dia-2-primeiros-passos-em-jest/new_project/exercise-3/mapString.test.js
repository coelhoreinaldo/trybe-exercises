const { mapString, encode, decode } = require('./mapString');

describe ('as funções encode, decode e mapString', () => {
  it ('a função encode e decode devem ser funções', () => {
    expect(typeof encode).toBe('function')
  })
});