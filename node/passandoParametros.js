// Como passar parametros de um módulo para outro pelo exports.

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}