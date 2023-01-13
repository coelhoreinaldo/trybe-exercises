const { professionalBoard, searchEmployee } = require ('./searchEmployee');

describe ('the searchEmployee function ', () => {
  it ('should be defined', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});