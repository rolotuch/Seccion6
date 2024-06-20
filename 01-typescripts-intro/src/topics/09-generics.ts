

// export function whatsMyType(arguments:any):any { //si solo lo pasamos asi, typescripts asume que esun any, en la medida de lo posible es mejor no utilizar any
//     return arguments;
// }

//genericos
export function whatsMyType2<T>(argument:T):T {
    return argument;
};

//aca toma el el tipo de datos que esta enviado para el primero es un string lo toma como tal,
//pero si yo le cambio el string, es decir 'hola' lo cambio por 123 automaticamente me lo cambia a un number
//para forzar a que respete el tipo de dato que esta recibiendo lo puedo hacer asi
//let amIString = whatsMyType2<string>('hola mundo') //con esto le indico que lo que espero recibir es un string
//y si le agrego un dato diferente me marca error 
let amIString = whatsMyType2('hola mundo')
let amINumber = whatsMyType2(100)
let amIArray = whatsMyType2([1,2,3,4,5])

console.log(amIString.split(''))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))
