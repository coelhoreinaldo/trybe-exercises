const { professionalBoard, searchEmployee } = require ('./searchEmployee');

describe ('the searchEmployee function ', () => {
  it ('should be defined', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it ('should return the details of id', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });
  it ('should return "ID não identificada" when not find the ID', () => {
    expect(() => searchEmployee('4002-8922', 'firstName')).toThrowError();
    expect(() => searchEmployee('4002-8922', 'firstName')).toThrowError('ID não identificada');
  });
  it ('should return "Informação indisponível" when not find the detail', () => {
    expect(() => searchEmployee('9852-2-2', 'meme')).toThrowError();
    expect(() => searchEmployee('9852-2-2', 'meme')).toThrowError('Informação indisponível');
  });
});