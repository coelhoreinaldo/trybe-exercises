const { professionalBoard, searchEmployee } = require ('./searchEmployee');

describe ('the searchEmployee function ', () => {
  it ('should be defined', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it ('should return the details of id', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it.todo('should return "ID não identificada" when not find the ID');
  it.todo('should return "Informação indisponível" when not find the detail')
});