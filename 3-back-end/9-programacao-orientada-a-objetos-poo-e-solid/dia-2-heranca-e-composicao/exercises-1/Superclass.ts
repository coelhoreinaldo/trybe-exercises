class Superclass {
  constructor(public isSuper: boolean) { 
    isSuper = true;
  }

  public sayHello() {
    console.log('Hello World!');
  }

}

class Subclass extends Superclass {

}

const myFunc = (object: Superclass) => {
  object.sayHello();
}

const object1 = new Superclass(true);
const object2 = new Subclass(true);

myFunc(object1);
myFunc(object2);
