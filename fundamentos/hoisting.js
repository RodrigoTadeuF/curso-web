function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a)

//console.log('a =', a)  --- fora da funcao
//   var a = 2 ----- esse valor é "interpretado", mesmo não ter sido decladaro antes
//   console.log('a =', a) --- vai rodar o valor definido e o de cima como indefinido

console.log('b =', b)
let b = 2
console.log('b =', b)
//com let tal efeito gera um erro!