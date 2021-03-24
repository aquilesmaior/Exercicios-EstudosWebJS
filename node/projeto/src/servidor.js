const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// TESTAR lá no postman o endereço get localhost:3003/produtos 
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
  //  res.send({ nome: 'Notebook', preco: 123.45 }) //Converter para JSON
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // VAI GERAR UM JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //json
     
})




app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})