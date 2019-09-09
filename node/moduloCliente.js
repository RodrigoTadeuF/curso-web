const moduloA = require('./moduloA') // ES5
const moduloB = require('./moduloB') // ES5

// import moduloA, { ola, bemVindo, ateLogo } from './moduloA'; //ES6
// import moduloB from './moduloB'; //ES6

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)