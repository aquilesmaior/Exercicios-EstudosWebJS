const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
                res.on('data', dados => {
                    resultado += dados
            })
    
            res.on('end', () => {
                try { // se conseguir chamar resolve
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e) // se não retorna o erro
                }
            })
        })
    })
}

/*  ASYNC AWAIT
    é uma função asyncrona, porém faz parecer syncrona
    Recurso recente do ES8
    Objetivo para simplificar o uso do Promises...
*/

let obterAlunos = async () => {  // criar função e marcar com async
    const turmA = await getTurma('A') // usa o await em vez de chamar o .then() 
    const turmB = await getTurma('B')
    const turmC = await getTurma('C')
    return [].concat(turmA, turmB, turmC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))