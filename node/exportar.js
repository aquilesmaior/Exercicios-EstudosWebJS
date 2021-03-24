console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // res { a: 1, b: 2, c: 3 }


/*  veja que independete da forma que fiz o exports
        this.a = 1
        exports.b = 2
        module.exports.c = 3
    
    ele referencia para o module.exports. Ou seja 
    das 3 formas ele ficará visível fora.

*/


// caso queira atribuir um novo objeto pra ser exportado, você
// obrigatoriamente tem que usar module.exports. Exemplo:
module.exports = { publico: true, texto: 'blá blá blá blá' }


