//typos basicos

//constantes
const name:string = 'Strider';

//declaracion y asignacion de una variable
//let hpPoints:number| string= 95; //permite numeros y cualquier string
let hpPoints:number| 'Full'= 95; //solo permite numero y la palabra full, si se cambia por otra palabra ya no funciona
//al colocar el pipe esto le indica que puede ser un numero o un string
//creamos otra variable
const isAlive: boolean = true;

hpPoints = 'Full'; // no da problemas, pero si quitas el pipe ya genera error
//antes de seguir, en el main.ts debemos de importar import './topics/01-basic-types.ts'
console.log({
    name,
    hpPoints,
    isAlive
});



export {};
