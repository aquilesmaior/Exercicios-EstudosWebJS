const fs = require('fs') // file script


const dados = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15,
    nome2: 'Celular2',
    preco2: 1449.9,
    desconto2: 0.1225
}


function extracaoDados() {
// Usando o dateformat 
// precisa de instalar o dateformat ok "npm install dateformat"
var dateFormat = require('dateformat');
var day=dateFormat(new Date(), "dd/mm/yyyy H:MM:ss");
    
// transformar o objeto em texto e atualizar arquivo
fs.writeFile(__dirname + '/dadosExtraidos.json', JSON.stringify(dados), err => { 
    console.log(err || 'Última Atualização - ', day)
})
setTimeout(extracaoDados, 5000);
}

extracaoDados();
