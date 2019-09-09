// Array em JS é um objeto, além de ser heterogêneo, pela fraca tipagem do JS
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //serve para adicionar no último elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena o Array
console.log(aprovados)

delete aprovados[1] // Não ordena, apenas torna o indice 1 undefined, e segue o Array como está
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'João', 'Daniel', 'Bob') //Serve para adicionar, remover e remover e adicionar ao mesmo tempo
console.log(aprovados)
