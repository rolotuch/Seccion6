import './style.css'
import { setupCounter } from './counter.ts'
//import './topics/01-basic-types'
//import './topics/02-object-interface'
//import './topics/03-funciones'
//import './topics/04-homework-types'
//import './topics/05-basic-desestructuracion'
//import './topics/06-function-desestructuracion'
//import './topics/07-import-export'
// import  './topics/08-clases'
// import './topics/09-generics'
// import './topics/10-Decoradores'
import './topics/11-Opcional-Chaining'








document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   Hola devs
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
   
  </div>
`
console.log('hola devs clg');
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
