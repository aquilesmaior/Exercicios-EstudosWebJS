const moduloA = require('../../moduloA') // referencia ao node/moduloA.js
console.log(moduloA.ola) 

// veja que aqui vamos chamar o modulo que criamos dentro de
const saudacao = require('saudacao') //node_modules/saudacao/index.js
console.log(saudacao.ola)

const outraForma = require('./pastaC') // ou ./pastaC
console.log(outraForma.ola2)

// vamos testar usando um modulo interno do node
/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

/* 
    se você acessar localhost:8080 no seu browser
    ele retornara  'Bom dia'
*/
