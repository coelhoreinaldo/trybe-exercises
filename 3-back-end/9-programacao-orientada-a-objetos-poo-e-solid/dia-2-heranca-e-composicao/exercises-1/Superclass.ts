class Superclass {
  constructor(public isSuper: boolean) { 
    isSuper = true;
  }

  protected sayHello() {
    console.log('Hello World!');
  }

}

class Subclass extends Superclass {
  public sayHello2() {
    this.sayHello();
  }
}

const myFunc = (object: Subclass) => {
  object.sayHello2();
}

// const object1 = new Superclass(true);
// const object2 = new Subclass(true);

// myFunc(object1);
// myFunc(object2);
