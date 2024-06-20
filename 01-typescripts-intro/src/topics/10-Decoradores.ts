//un decorador no es mas que una simple funcion comun common function
//
function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "new Property";
    hello = "Override";
  };
}

@classDecorator
export class superClass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Hola mundo");
  }
}

console.log(superClass);

const myClass = new superClass();
console.log(myClass);
