interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number){} 

  myFunc(myParam: number):string {
    return `${myParam + this.myNumber}`;
  }
}

const myClass = new MyClass(10);

console.log(myClass.myFunc(20));