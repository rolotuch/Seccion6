import { Hero } from "./08-clases";
// export class Person {
//   public name: string; //puede ser exportada para a app
//   private adress: string; //solo funciona dentro de la clase no se puede exportar
//   //el constructor es un metodo especial en nuestras clases, es el primer metodo o funcion que se llama cuando llamamos a una instancia de una clase
//   //el basico es este
//   // constructor(){
//   //     this.name = 'Rolando';
//   //     this.adress = 'Chimaltenango';
//   // }

//   //otra forma

//   constructor(name: string, adress: string) {
//     this.name = name;
//     this.adress = adress;
//   }
// }

// //const ironman = new Person();
// const ironman = new Person("Rolando", "Chimaltenango");

// console.log(ironman);

//otra forma de acerlo
export class Person {
  constructor(
    public first_name  : string,  //si modificamos los campos aca no deberia de afectar la clase hero
    public last_name: string = "No Last Name",
    private adress: string = "No Address"

) {}
}

//EXTENDER UNA CLASE añadir o expandir su funcionalidad
// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "Chimaltenango"); //indica que tiene que llmaar al constructor de padre(Person) es obligatorio
//   }
// }

//PRIORIZAR LA COMPOSICIÓN SOBRE HERENCIA
export class Hero2 {
  //public person: Person;

  constructor(
    public alterHero: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName, "Chimaltenango");
  }
}

const ironman = new Person("Rolando");
const ironman1 = new Person("Rolando", "Chimaltenango");
console.log(ironman);
console.log(ironman1);

// const ironman2 = new Hero("Ironman", 45, "Tony stark");
// console.log(ironman2);

const tony= new Person("Tony",'stark', 'san pedro sula');
const ironman3 = new Hero2("Ironman", 45, "Tony stark", tony);
console.log("imprimiendo ironman3");
console.log(ironman3);
