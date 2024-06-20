//arreglos
//let skills=['Bash','Counter','Healing', true,123]; //este es un arreglo que adminte string, number y booleanos=
//para forzar que solo acepte string podemos usar
//let skills:string[]=['Bash','Counter','Healing', true,123]; //Aca me da error el number y el boolean
let skills: string[] = ["Bash", "Counter", "Healing"]; //arreglo correcto
//recordemos que si los valores no cambian usemos constantes en vez de let (const)
//veamos este caso, en el name le estoy asinango un string pero no le estamos indicando explicitamente
//que sea un string es decir name puede recibir un numer o un boolean, y tampoco podemos colocar
//esto name:string:'Strider'  esto rompe las reglas de javascripts
// para solucionar eso, usamos una interface
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //el ? es para indicar que se puede usuar o no dentro de la declaracion de la constante.
}
//ahora para decirle que la const Strider sea de tipo character despues de strider colocamos dos puntos y character de esta forma
const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"]
};

//ahora ya podemos usarlo
strider.hometown = "Rivendell";

console.table(strider); // el table es para mostrar los datos en forma de tabla


export {};
