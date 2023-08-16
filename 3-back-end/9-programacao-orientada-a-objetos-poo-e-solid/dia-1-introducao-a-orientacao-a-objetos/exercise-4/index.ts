class Student {
  private _matricula: string;
  private _nome: string;
  private _provasNotas: number[];
  private _trabalhosNotas: number[];

  constructor(
    matricula:string, nome:string, provasNotas:number[], trabalhosNotas:number[]
  ){
    this._matricula = matricula;
    this._nome = nome;
    this._provasNotas = provasNotas;
    this._trabalhosNotas = trabalhosNotas;
  }
}