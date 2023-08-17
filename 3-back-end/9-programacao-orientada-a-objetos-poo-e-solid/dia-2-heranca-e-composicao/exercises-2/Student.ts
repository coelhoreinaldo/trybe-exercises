import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get assignmentsGrades() {
    return this._assignmentsGrades;
  }

  set enrollment(value:string){
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }
  
  set examsGrades(value:number[]){
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  set assignmentsGrades(value:number[]){
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }

  get sumGrades():number {
    const examsGradesSum = this.examsGrades.reduce((acc, curr) => acc + curr, 0);
    const assignmentsGradesSum = this.assignmentsGrades.reduce((acc, curr) => acc + curr, 0);

    return Math.round(examsGradesSum + assignmentsGradesSum)
  }

  get sumAverageGrade(): number {
    const totalSum = this.sumGrades;
    const divider = this.examsGrades.length + this._assignmentsGrades.length;

    return Math.round(totalSum / divider);
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

}
