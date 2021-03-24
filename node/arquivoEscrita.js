/*
    WriteFile - Aqui iremos gerar um novo arquivo no formato .json
    com os dados do array produto abaixo
*/

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    descnto: 0.15
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo com sucesso!')
})




