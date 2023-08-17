export default class Person implements Person {
  constructor(private _name: string, private _birthDate: Date){ 
    this.validatePerson();
   }

  get name():string {
    return this._name;
  }

  get birthDate():Date {
    return this._birthDate
  }

  set name(newName:string) {
    this.validateName(newName);
    this._name = newName;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
  }

  private validateName(name:string):void {
    if(name.length < 3){
      throw new Error ('Invalid name')
    }
  }
  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearsMs = 31_536_000_000;
    return Math.floor(diff / yearsMs)
  }

  private validateBirthDate(date: Date): void {
    if(date.getTime() > new Date().getTime()){
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    
    if(Person.getAge(date) > 120){
      throw new Error(`A pessoa deve ter no máximo ${200} anos.`)
    }
  }

  private validatePerson():void{
    this.validateBirthDate(this.birthDate)
    this.validateName(this.name)
  }
}