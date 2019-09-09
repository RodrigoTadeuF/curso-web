function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // pode encadiar inumeros then
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // usado para pegar a exceção no reject