const { info, printMessage } = require('./printMessage')

describe ('the printMessage function', () => {
  it ('should have the right properties', () => {
    expect(info).toHaveProperty('personagem');
  });
  it ('should contains the info', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch('Margarida');
  });
});