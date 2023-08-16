class Student {
  private _studentId: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    studentId:string, name:string
  ){
    this._studentId = studentId;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get studentId():string { return this._studentId }
  set studentId(newId) { this._studentId = newId }

  get name():string { return this._name }
  set name(newName: string){
    if(newName.length < 3) throw new Error ('Invalid name.')
    this._name = newName
  }

  get examsGrades():number[] { return this._examsGrades }
  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examsGrades = value;
  }

  get assignmentsGrades():number[] { return this._assignmentsGrades }
  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    this._assignmentsGrades = value;
  }

  calculateGrades():number{
    const examsTotal = this._examsGrades.reduce((acc, curr) => acc + curr, 0)
    const assignmentsTotal = this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0)

    return examsTotal + assignmentsTotal;
  }

  calculateAverage():number {
    const divider = this.assignmentsGrades.length + this._examsGrades.length;
    return Math.round(this.calculateGrades() / divider);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.examsGrades = [1, 1, 1, 1];
personOne.assignmentsGrades = [1, 1];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.calculateGrades());
console.log('Média de todas as notas: ', personOne.calculateAverage());
