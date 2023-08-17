class Superclass {
  constructor(public isSuper: boolean) { 
    isSuper = true;
  }

  public sayHello() {
    console.log('Hello World!');
  }

}

class Subclass extends Superclass {
  constructor(isSuper: boolean) {
    isSuper = false;
    super(isSuper);
  }
}

const myFunc = (object: Superclass) => {
  if(object.isSuper){
    return true;
  }
  return false;
}

const object1 = new Superclass(true);
const object2 = new Subclass(true);

console.log(myFunc(object1));
console.log(myFunc(object2));
