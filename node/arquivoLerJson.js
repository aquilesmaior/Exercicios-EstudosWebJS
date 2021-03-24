/*  JSON NÃO É UMA LINGUAGEM - é apenas um formato de arquivo
    para troca de dados entre sistema no formato texto.

    (Javascript Object Notation)

*/
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'


// SÍNCRONO... (não é muito recomendado, pois ele precisará de ler arquivo completamente pra somente depois liberar o eventloop)
const conteudo = fs.readFileSync(caminho, 'utf-8') 
console.log(conteudo)


// ASSÍNCRONO - é mais recomendável, pois ele chama só assim que o arquivo tiver carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // veja estamos passando uma callback aqui (err, conteudo) e dentro da funcao tu poderia tratar o erro se quiser
    const config = JSON.parse(conteudo) // JSON.parse -> convertendo string para objeto
    console.log(`${config.db.host}:${config.db.port}`)
})


// OUTRA FORMA ASSÍNCRONA e mais simples seria assim:
const config = require('./arquivo.json')
console.log(config.db)


// COMO MOSTRAR O CONTEUDO DA PASTA QUE ESTAMOS
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta em que estamos agora...')
    console.log(arquivos)
})


/*  [ OBSERVAÇÕES ] 
    
    err - pode usar para tratar erros, veja tratamentos de erro na callback
    readdir - leia a pasta
    __dirname - quer dizer "diretório atual" ( é uma constante presente do node)
    
    SÍNCRONO - não é muito recomendado, mas se for um arquivo pequeno
               então não teremos muito problemas
    
*/