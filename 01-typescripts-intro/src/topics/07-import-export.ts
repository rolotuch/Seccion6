//todo lo que esportamos es lo que se muestra en pantalla
import { Product, taxCalculation } from "./06-function-desestructuracion";

const shoppingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 150.99,
  },
  {
    description: "iPad Air",
    price: 350.99,
  },
  {
    description: "iPhone 12",
    price: 750.99,
  },
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});

console.log("Total", total);
console.log("Tax", tax);
