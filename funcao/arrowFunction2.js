function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // 1000 é o tempo em milisegundo
}

new Pessoa