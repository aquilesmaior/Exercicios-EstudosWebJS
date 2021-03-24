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
                    reject(e)
                }
            })
        })
    })
}


// Recomendado | Aqui temos uma forma muito mais iNTERESSANTE com Promises
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //.then(x => console.log(x))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // nunca esquecer de colocar o tratamento de erro

// vamos passar uam turma que não existe para testarmos o erro
getTurma('D').catch(e => console.log(e.message))



/*
 ABAIXO TEMOS A callbackHell kkk 
 coloquei aqui só pra ter como base de comparação, veja que doideira, 
 promises é muito mais simples nessa situação

let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})    
*/