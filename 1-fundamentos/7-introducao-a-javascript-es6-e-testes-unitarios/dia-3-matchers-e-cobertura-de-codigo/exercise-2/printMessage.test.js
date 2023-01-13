const { info, printMessage } = require('./printMessage')

describe ('the printMessage function', () => {
  it ('should have the right properties', () => {
    expect(info).toHaveProperty('personagem');
  });
  it ('should contains the info', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch('Margarida');
  });
  it ('should throw a error when the parameter is not a object/not exist', () => {
    expect(() => printMessage()).toThrow(Error);
    expect(() => printMessage(test.personagem)).toThrow(Error);
  });
});
