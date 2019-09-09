let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // o retorno vem de maneira implícita
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // padrão!!
ola = _ => 'Olá' // nesse caso o _ é um parâmetro
console.log(ola())