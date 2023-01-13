const { info } = require('./printMessage')

describe ('the printMessage function', () => {
  it ('should have the right properties', () => {
    expect(info).toHaveProperty('personagem');
  });
});