class Student {
  private _studentId: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    studentId:string, name:string, examsGrades:number[], assignmentsGrades:number[]
  ){
    this._studentId = studentId;
    this._name = name;
    this._examsGrades = examsGrades;
    this._assignmentsGrades = assignmentsGrades;
  }

  get studentId():string { return this._studentId }
  get name():string { return this._name }
  get examsGrades():number[] { return this._examsGrades }
  get assignmentsGrades():number[] { return this._assignmentsGrades }

  calculateGrades(){
    const examsTotal = this._examsGrades.reduce((acc, curr) => acc + curr, 0)
    const assignmentsTotal = this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0)

    return examsTotal + assignmentsTotal;
  }
}