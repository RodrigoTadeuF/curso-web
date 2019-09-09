const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () { // Execução de 5 em 5 segundos */5 as 12 horas * 12 e na terca feira (2)
    console.log('Executando Tarefa1!', new Date().getSeconds())
}) 

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log( 'Execitando Tarefa 2!', new Date().getSeconds())
})