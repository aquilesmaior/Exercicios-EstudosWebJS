const schedule = require('node-schedule');

/* qtos segundos hora dia 0-Dom 1-seg 2-ter 3-q
   asterisco é serve pra ignorar, bom dar uma lida na doc do schedule
*/

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 2', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// o codigo acima ficara executando de [5 em 5 segundos] na hora [9] a [*]qualquer minuto de qualquer [2] terça feita
// se tirar a */ antes do 5 ele executará no segundo 5

/* VEJAMOS OUTRO EXEMPLO:
   Código abaixo, todo dia quando for 10:00 30segundos 
   acada 30 ele dispara a função
*/
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})