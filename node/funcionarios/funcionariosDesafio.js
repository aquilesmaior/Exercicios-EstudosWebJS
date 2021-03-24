// RESOLVENDO DESAFIO
// mulher chinesa com menor salario
// genero 'F'
// pais = 'China'
// salario: 


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios) // testar arquivo

    // f para funcionarios
   const pais = f => f.pais === 'China'
   const mulheres = f => f.genero === 'F'
   const menorSalario = (func, funcAtual) => { 
       return func.salario < funcAtual.salario ? func : funcAtual
       // tentar entender pq não consegui fazer com neste caso com o Math.min
   }


   const func = funcionarios
    .filter(pais)
    .filter(mulheres)
    .reduce(menorSalario)

   console.log(func)



})





