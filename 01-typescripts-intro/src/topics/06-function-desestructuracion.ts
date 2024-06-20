export interface Product {
  //el export es para utilizarlo en la seccion de importacion y exportacion
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  products: Product[];
  tax: number;
}

function listProduct(products: Product[]): void {
  products.forEach(({ description, price }) => {
    console.table(`Producto: ${description}, Precio: ${price}`);
  });
}

//function taxCalculation(options: TaxCalculationOptions): number[] { //aca tambien sustituimos el opcion por
//function taxCalculation({ products, tax }: TaxCalculationOptions): number[] {//el problema es si hay demaciadas variables para agregar, mejor utilizo esto
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  //tambien cambie el number para indicar que solo estoy aceptando dos parametros
  const { tax, products } = options;
  //aca tambien sustituimos el opcion por
  let total = 0;
  //sin desestructurizacion
  //   options.products.forEach((product) => {
  //     total += product.price;
  //   });
  //con desestructurizacion
  //options.products.forEach(({ price }) => {//aca quitamos el opctions
  products.forEach(({ price }) => {
    total += price;
  });

  //return [total, total * options.tax]; //quitamos el options
  return [total, total * tax]; //quitamos el options
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//sin desestructuriazacion
const result = taxCalculation({
  products: shoppingCart, //como el objeto no es el mismo nombre de la variable se coloca de esta forma.
  tax, //cuando un objeto tiene el mismo nombre de la variable podemos dejarlo asi, pero si no tendria que tener clave: valor, es decir tax:tax
});

//aplicar desestrucruracion
const [total, taxTotal] = taxCalculation({
  products: shoppingCart, //como el objeto no es el mismo nombre de la variable se coloca de esta forma.
  tax, //cuando un objeto tiene el mismo nombre de la variable podemos dejarlo asi, pero si no tendria que tener clave: valor, es decir tax:tax
});

console.log("desestruracion de funciones");
listProduct([phone, tablet]);
console.log("Total", result[0]);
console.log("Tax", result[1]);

console.log("Total", total);
console.log("Tax", taxTotal);

//export {}; esto es parte de la leccion 7
