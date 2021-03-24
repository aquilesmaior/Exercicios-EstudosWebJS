const express = require('express') // import do express
const app = express() // instanciando o express e atribuir a app
const bodyParser = require('body-parser')  // qdo vc submete o form, ele faz um parser no corpo da requisição e jogar no request body

app.use(bodyParser.urlencoded({ extended: true }))

// atendendo as urls
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    let nome = req.body['nome'] 
    resp.send(`<h1>Parabéns!!! Usuário <i>${nome}</i> incluido</h1>`)
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})



app.listen(3003) // escutar porta

/* Lembrar de rodar o node no terminal para que o código funciona
form/
node server.js

*/