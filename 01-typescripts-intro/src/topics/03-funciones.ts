import { setupCounter } from '../counter';
//definicion basica de una funcion
//si la declaramos asi, typescripts entiende que esta funcion no recibe ningun argumento y devuelve void, en javascripts
// toda funcion si se declara asi, devuelve undefined, no es lo mismo que void.

// function addNumbers(a, b){// si solo lo dejo de esta manera al colocarme sobre cualeuir variable me da un warning lo que indica el warning es que no le estamos colocando ningun tidpo de dato a los parametros automaticamente le asignuna un any
//     // para solucionar esto por lo menos debemos especificar que se trata de un any a:any

// }

//funcion correcta
function addNumber(a: number, b: number) {
  return a + b;
};

//otra forma de realizarlo conuna funcio flecha tambien puede ser asi
const addNumbersArrow = (a: number, b: number): number => {
  return a + b;
};

//si queremos convertir el resultado a string podria hacerse asi
const addNumbersArrow2 = (a: number, b: number): string => {
  return (a + b).toString();
};

//lo anterior tambien puede quedar asi con comillas especiales
const addNumbersArrow3 = (a: number, b: number): string => {
  return `${a + b}`;
};

//en este primer ejmeplo estamos multiplicando el primer numero por la base, no se esta utilizando el segundo numero
//la idea es que si no se le especifica datos o si no se llama este debe funcionar
//si un argumento lo queremos opcional le colocamos el ?
function multiply(firstNumber: number, secondNumber?: number, base: number=2) {
  return firstNumber * base;
};

//resultados
console.log(addNumber(1, 2));
const result: number = addNumbersArrow(1, 2);
const result2: string = addNumbersArrow2(1, 2);
const result3: string = addNumbersArrow3(1, 2);
const multiplyResult: number = multiply(5);
console.log({ result, result2, result3, multiplyResult });

//fucniones con objetos como argumentos
console.log("fucniones con objetos como argumentos");
//la forma tradicional de crear un personaje por ejemplo seria asi
const character =(character, amount:number) => {
    character.pv += amount;    
}

//pero al hacerlo me muestra un error en el character, me indica que es de tipo any, entonces para solucionar esto lo resuelvo con una interfaz

interface Character{
    name: string;
    hp: number;
    showHp: () => void; //
}
//con lo anterior se garantiza que el Character tenga por lo menos uno de estos tres tipos de datos
const healCharacter = (character: Character, amount: number) => {
    character.pv += amount; //aca se esta quejando porque pv no pertenece a un elemento de caracter debe ser hp
}

const healCharacter2 = (character: Character, amount: number) => {
    character.hp += amount; //solucion
}

//al hacer lo anterio es importante para no teneer problemas futuros
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();
healCharacter2(strider, 10);
strider.showHp();



export {};
