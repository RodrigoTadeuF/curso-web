// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // tornou o objeto constante, ninguém consegue mudar

pessoa.nome = 'Maria' // será ignorado
pessoa.end = 'Rua ABC' //será ignorado
delete pessoa.nome //não será executado

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})

pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
