const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios) // testar arquivo
   
   })



   // CRIE UM NOVO ARQUIVO funcionariosDesafio.js e resolva
    // mulher chinesa com menor salario de acordo com nosso
    // arquivo funcionarios.json