export default class Subject {
  constructor(private _name: string){}

  get name() {
    return this._name
  }

  set name(value) {
    if(value.length < 3) throw new Error ('O nome tem que possuir no mínimo 3 caracteres')
    this._name = value;
  }
}